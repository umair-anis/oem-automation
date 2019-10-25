'use strict'

const { calculateIterations } = require('../iteration/calculateIterations')
const { cloneDeep } = require('lodash')
const { createTestResult } = require('../logging/createTestResult')
const { endStep } = require('../logging/endStep')
const { invokeScenario } = require('../scenario/invokeScenario')
const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')
const { startStep } = require('../logging/startStep')
const { Status } = require('jest-allure/dist/Reporter')
const { updateTestResult } = require('../logging/updateTestResult')
const { logTestDetails } = require('../logging/logTestDetails')

/**
 * @description Executes a test and all its scenarios then logs results to a specified location.
 * The test will execute iterations based upon browser count and the highest known data count for
 * each step.
 * @function invokeTest
 * @param {Test} test Pre-configured test to execute.
 * @param {Reporter} reporterConfig Any, pre-configured, reporter that writes results to a
 * specified database.
 * @async
 * @returns {Result} Returns an immutable instance of a test result that contains the status and
 * detailed test execution messages.
 * @example
 * const testResult = await invokeTest(myTest, mongoReporter)
 */
const invokeTest = async (test = {}, reporterConfig = {}) => {
  const testName = test.name
  const testDetails = []
  let testResult = {}
  let testStartTime = Date.now()
  let testStatus = 'pass'
  let currentBrowserNumber = 0

  try {
    const environment = test.environment
    const scenarios = test.scenarios
    const browsers = test.browsers
    var dataIterations = await calculateIterations(scenarios)
    const browserCount = browsers.length
    const totalExecutions = browserCount * dataIterations

    console.log(`Running test: ${testName}...`)
    startStep(`Beginning Execution of Test: ${testName} Total Executions: ${totalExecutions}`)

    for (const browser of browsers) {
      currentBrowserNumber++
      const browserName = browser.name
      let dynamicData = []

      for (let currentIteration = 1; currentIteration <= dataIterations; currentIteration++) {
        const testCopy = await cloneDeep(test)
        testStartTime = Date.now()

        testCopy.startTime = testStartTime
        testCopy.currentIteration = currentIteration
        testCopy.currentBrowserNumber = currentBrowserNumber
        testCopy.currentBrowser = browser
        testCopy.browserCount = browserCount

        const testReport = await createTestResult(testCopy, reporterConfig)

        let parent = null

        try {
          for (const scenario of scenarios) {
            const scenarioCopy = await cloneDeep(scenario)

            startStep(`Executing Iteration: ${currentIteration}, Browser: ${browserName}, Scenario: ${scenario.name}.`)
            testDetails.push(`Executing Iteration: ${currentIteration}, Browser: ${browserName}, Scenario: ${scenario.name}.`)

            scenarioCopy.environment = environment
            scenarioCopy.browser = browser
            scenarioCopy.currentIteration = currentIteration
            scenarioCopy.parent = parent

            // Add the test result to the scenario

            const scenarioMsg = await MessageBuilder().setParent(parent)
              .setContent(scenarioCopy)
              .setDynamicData(dynamicData)
              .build()

            const msgResult = await invokeScenario(scenarioMsg, reporterConfig)

            const scenarioResult = msgResult.content
            const scenarioStatus = scenarioResult.status.toLowerCase()
            const scenarioDetails = scenarioResult.details

            scenarioDetails.forEach(detail => {
              testDetails.push(`\t` + detail)
            })

            if (scenarioStatus.toLowerCase() === 'fail') {
              testStatus = 'fail'
              endStep(Status.Failed)
              await logTestDetails(testName, testDetails)
              break // Exit the current loop as the test has failed.
            }

            endStep(Status.Passed)

            parent = msgResult.parent
            if (msgResult.dynamicData != null) dynamicData = msgResult.dynamicData
            dataIterations = (msgResult.updatedIterations > dataIterations) ? msgResult.updatedIterations : dataIterations
          }
        } catch (e) {
          const scenarioExceptionMsg = `An exception was triggered during the execution of a scenario: ${e.message} ${e.stack}.`
          testStatus = 'fail'
          testDetails.push(scenarioExceptionMsg)
          endStep(Status.Failed)
          await logTestDetails(testName, testDetails)

          if (parent != null && parent !== undefined && parent !== {}) {
            try {
              await parent.close()
              await parent.quit()
              parent = null
            } catch (e) {
              /* ignore */
            }
          }
        }

        const testEndTime = Date.now()
        testResult = await ResultBuilder().setStatus(testStatus)
          .setDetails(testDetails)
          .setStartTime(testStartTime)
          .setEndTime(testEndTime)
          .build()

        await updateTestResult(testReport, reporterConfig)

        // Reset test-level persisted values for the next iteration of the test.
        if (parent != null && parent !== undefined && parent !== {}) {
          try {
            await parent.close()
            await parent.quit()
            parent = null
          } catch (e) {
            /* ignore */
          }
        }
      }

      dynamicData = [] // Reset once all data iterations have executed.
    }
  } catch (e) {
    const testExceptionMsg = `An exception was triggered while setting up test: ${testName} : ${e.message} : ${e.stack}.`
    testStatus = 'fail'
    testDetails.push(testExceptionMsg)
    endStep(Status.Failed)

    const testEndTime = Date.now()
    const testReport = await ResultBuilder().setStatus(testStatus)
      .setDetails(testDetails)
      .setStartTime(testStartTime)
      .setEndTime(testEndTime)
      .build()

    await updateTestResult(testReport, reporterConfig)
  }
  return Object.freeze(testResult)
}

module.exports = {
  invokeTest
}
