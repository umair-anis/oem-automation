/**
 * @name scrape
 */
'use strict'

const { DynamicDataBuilder } = require('../data/DynamicDataBuilder')
const { getCurrentIterationData } = require('../iteration/getCurrentIterationData')
const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function scrape
 * @description Extracts the value of a child control's property based upon the property specified in the step's "data" field. Once a value has been extracted,
 * if it's not null, it's then added to a key/values pair (values being an array) using the "dataKey" property from a step as the key for that value.
 * @async
 * @param {object} msg Function containing the step, previous dynamic data, parent, and child of the current test's step.
 * @returns {object} Returns a function containing the results of the scrape and details about what happened during the scrape operation. If the scrape was not able to
 * extract the property or returned a null value for that property then the status will be "fail". If the property was found and a non-null value was extracted then
 * the status will be "pass" and the data from the scrape will be stored in an array that's been associated with the key specified.
 * @example
 * const step = StepBuilder().setControl(await loginUI().errorMsg) // Control to be scraped.
 *  .setAction(await actions().scrape) // Must call the scrape action to perform the actual scrape once the script executes.
 *  .setDataKey('username') // Key to be used to persist the scraped results.
 *  .setData(['outerText']) // Property of the control you would like to extract/scrape the value from.
 *  .build()
 *
 * // When script executes it persists results to the msg object, which gets tunneled up and bubbled back down to future steps.
 * // To setup a step that can leverage the scraped value one must do:
 * const step = StepBuilder().setControl(await mainMenu().label)
 *  .setAction(await actions().compare)
 *  .setDataKey('username') // Key of the previous value that was extracted in a previous step.
 *  .setValue(['innerHtml']) // Property of the label to extract and use in the comparison.
 *  .build()
 */
const scrape = async (msg = {}) => {
  const step = msg.content
  const parent = msg.parent
  const child = msg.child
  const data = await getCurrentIterationData(msg)
  const value = await msg.child.getAttribute(data)
  let status = ''
  let details = ''

  if (value === null) {
    status = 'fail'
    details = `Attempted to scrape the property: ${data} but the property's value is null.`
  } else {
    status = 'pass'
    details = `Action Successful: Scraped ${value} with ${data}`
  }

  const dynamicData = await DynamicDataBuilder().setKey(step.dataKey)
    .setValues([value])
    .build()

  const result = await ResultBuilder().setStatus(status)
    .setChild(child)
    .setParent(parent)
    .setDynamicData([dynamicData])
    .setDetails([details])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(parent)
    .setChild(child)
    .setDynamicData(dynamicData)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  scrape
}
