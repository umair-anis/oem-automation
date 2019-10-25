'use strict'

const { getCurrentIterationData } = require('../iteration/getCurrentIterationData')
const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @description Compares a value from the current control's property with a previous value from a scraped or extracted control or service's property/node.
 * @async
 * @param {object} msg Function containing the step, previous dynamic data, parent, and child of the current test's step.
 * @return {object} Returns a message object containing the status (pass/fail) and details of the comparison. If the values matched the status will be "pass".
 * If the values do not match then the status will be "fail".
 * @example
 * // Assume a previous step was written scrape the value of a control's property and cached in the msg.dynamicData property passed to each step.
 * const step = StepBuilder().setControl(await homeUI().mainMenuLabel) // The control that will be used for the comparison.
 *  .setAction(await actions().compare) // The "compare" action to perform the comparison.
 *  .setData(['innerHtml']) // The property to be extracted from the "mainMenuLabel".
 *  .setDataKey('username') // The key for the value that was previously scraped from a step.
 *  .build()
 */
const compare = async (msg = {}) => {
  const step = msg.content
  const parent = msg.parent
  const child = msg.child
  const previousScrapedvalue = await getCurrentIterationData(msg)
  let status = ''
  let details = ''

  if (previousScrapedvalue === null || previousScrapedvalue === undefined || previousScrapedvalue === '') {
    status = 'fail'
    details = `There was no key or no data associated with key: ${step.dataKey}. Be sure the scrape or extract the value before you try to use it.`
  } else {
    const attributeToScrape = step.data[0]
    const currentScrapedValue = await msg.child.getAttribute(attributeToScrape)

    if (currentScrapedValue === null) {
      status = 'fail'
      details = `Attempted to extract the property: ${attributeToScrape} but the property's value is null.`
    } else {
      if (currentScrapedValue.toLowerCase() === previousScrapedvalue.toLowerCase()) {
        status = 'pass'
        details = `Successfully compared the value for key: ${step.dataKey}, matching it to the value: ${currentScrapedValue} from control: ${step.control.name}.`
      } else {
        status = 'fail'
        details = `The value for key: ${step.dataKey}: ${previousScrapedvalue} did not match the control: ${step.control.name}'s value: ${currentScrapedValue}.`
      }
    }
  }

  const result = await ResultBuilder().setStatus(status)
    .setChild(child)
    .setParent(parent)
    .setDynamicData(msg.dynamicData)
    .setDetails([details])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(parent)
    .setChild(child)
    .setDynamicData(msg.dynamicData)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  compare
}
