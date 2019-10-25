'use strict'

const { cloneDeep } = require('lodash')
const { endStep } = require('../logging/endStep')
const { invokeStepStrategy } = require('../step/invokeStepStategy')
const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')
const { startStep } = require('../logging/startStep')
const { Status } = require('jest-allure/dist/Reporter')

/**
 * @description
 * @function invokeScenario
 * @param {*} msg
 * @param {*} reporterConfig
 * @async
 * @returns {Result}
 * @example
 */
const invokeScenario = async (msg = {}, reporterConfig = {}) => {
  const scenario = msg.content
  const environment = scenario.environment
  const name = scenario.name
  const steps = scenario.steps
  const currentIteration = scenario.currentIteration
  const browser = scenario.browser
  const scenarioDetails = []
  let dynamicData = msg.dynamicData
  let parent = msg.parent
  let scenarioStatus = 'pass'
  let updatedIteration = msg.updatedIteration

  startStep(`Executing Scenario: ${name}.`)
  scenarioDetails.push(`Executing Scenario: ${name}.`)

  const scenarioStartTime = Date.now()

  // create scenario result
  scenarioDetails.push(`Number of Scenario Steps: ${steps.length}.`)

  for (const step of steps) {
    const stepCopy = await cloneDeep(step)

    stepCopy.currentIteration = currentIteration
    stepCopy.parent = parent
    stepCopy.browser = browser
    stepCopy.environment = environment

    // add scenario result to step result

    const stepMessage = await MessageBuilder().setContent(stepCopy)
      .setParent(parent)
      .setDynamicData(msg.dynamicData)
      .build()

    // Execute the step.
    const msgResult = await invokeStepStrategy(stepMessage, reporterConfig)

    // Prepare for the next step and report the results.
    const stepResult = msgResult.content

    if (msgResult.parent != null) {
      parent = msgResult.parent
    }

    const stepStatus = stepResult.status.toLowerCase()
    const stepDetails = stepResult.details

    if (stepResult.dynamicData.length > 0) {
      dynamicData = stepResult.dynamicData
    }

    updatedIteration = (msgResult.updatedIteration > updatedIteration) ? msgResult.updatedIteration : updatedIteration

    stepDetails.forEach(detail => {
      scenarioDetails.push(`\t` + detail)
    })

    if (stepStatus === 'fail') {
      scenarioStatus = 'fail'
      endStep(Status.Failed)
      break
    }

    // Keep data in sync for files and UI. Write out updated values to the data file.
    // if has scraper and has validator then validate(scraper, msgResult.currentData)
  }

  const scenarioEndTime = Date.now()
  const output = (scenarioStatus === 'fail') ? `Scenario FAILED: ${name}.` : `Scenario Passed: ${name}.`

  scenarioDetails.push(output)

  const scenarioResult = await ResultBuilder().setParent(parent)
    .setStatus(scenarioStatus)
    .setDetails(scenarioDetails)
    .setStartTime(scenarioStartTime)
    .setEndTime(scenarioEndTime)
    .build()

  const resultMsg = await MessageBuilder().setContent(scenarioResult)
    .setParent(parent)
    .setDynamicData(dynamicData)
    .setUpdatedIterations(updatedIteration)
    .build()

  // update scenario result
  endStep(Status.Passed)

  return Object.freeze(resultMsg)
}

module.exports = {
  invokeScenario
}
