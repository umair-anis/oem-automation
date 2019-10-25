'use strict'

const { By } = require('selenium-webdriver')
const { endStep } = require('../logging/endStep')
const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')
const { startStep } = require('../logging/startStep')
const { Status } = require('jest-allure/dist/Reporter')
const { actions } = require('../action/actions')

/**
 * @description
 * @function invokeSearch
 * @param {*} msg
 * @async
 * @returns {Message}
 * @example
 */
const invokeSearch = async (msg = {}) => {
  const step = msg.content

  const details = []
  let status = ''
  let output = ''
  let element = {}
  let startTime = null
  let endTime = null
  let parent = null

  try {
    const control = step.control
    const controlName = control.name
    const property = control.property
    const propertyName = property.name.toLowerCase()
    const propertyPath = property.path
    const staticWait = step.staticWait
    parent = msg.parent

    // Set Timeout to find the element in a certain amount of time
    //var searchTimeoutID = await setTimeout(async (parent) => {
    //  await parent.close()
    //  await parent.quit()
    //  endStep(Status.Failed)
    //}, step.timeout, parent)

    // Wait Function: determine whether to use a static or dynamic wait
    // based on the step's properties
    if (staticWait > 0) {
      details.push(`Static Wait: ${staticWait} milliseconds`)
      await parent.sleep(staticWait)
    } else {
      details.push(`Dynamic Wait: Until ${controlName} loads`)
      const waitResult = await actions().wait(msg) // uses driver.wait(until.elementLocated...
      parent = waitResult.parent
    }

    startStep(`Searching for control: ${controlName}.`)
    startTime = Date.now()

    switch (propertyName) {
      case 'classname':
        element = await parent.findElement(By.className(propertyPath))
        break

      case 'css':
        element = await parent.findElement(By.css(propertyPath))
        break

      case 'id':
        element = await parent.findElement(By.id(propertyPath))
        break

      case 'linktext':
        element = await parent.findElement(By.linkText(propertyPath))
        break

      case 'name':
        element = await parent.findElement(By.name(propertyPath))
        break

      case 'partiallinktext':
        element = await parent.findElement(By.partialLinkText(propertyPath))
        break

      case 'tagname':
        element = await parent.findElement(By.tagName(propertyPath))
        break

      case 'xpath':
        element = await parent.findElement(By.xpath(propertyPath))
        break

      default:
        throw new Error(`Unknown propery specified in invokeSearch: ${propertyName}.`)
    }

    //await clearTimeout(searchTimeoutID)

    endTime = Date.now()
    endStep(Status.Passed)

    output = `Search Successful: ${controlName}`
    status = 'pass'
    details.push(output)
  } catch (e) {
    endTime = Date.now()
    endStep(Status.Failed)

    output = `Search FAILED: Exception triggered executing a search: ${e.message} : ${e.stack}.`
    status = 'fail'
    details.push(output)
  }

  const searchResult = await ResultBuilder().setChild(element)
    .setStartTime(startTime)
    .setEndTime(endTime)
    .setStatus(status)
    .setDetails(details)
    .setParent(parent)
    .build()

  const msgResult = await MessageBuilder().setContent(searchResult)
    .setParent(parent)
    .setChild(element)
    .build()

  return Object.freeze(msgResult)
}

module.exports = {
  invokeSearch
}
