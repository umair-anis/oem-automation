/**
 * @name invokeAction
 */
'use strict'

const { endStep } = require('../logging/endStep')
const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')
const { startStep } = require('../logging/startStep')
const { Status } = require('jest-allure/dist/Reporter')

/**
 * @function invokeAction
 * @description Call an action function on a Control element
 *               - Record the action time
 *               - Record the action details
 *               - Record the action errors
 *
 * @param {MessageBuilder} msg
 */
const invokeAction = async (msg = {}) => {
  const step = msg.content
  let status = ''
  const details = []
  let data = ''
  let parent = msg.parent
  let child = msg.child
  let dynamicData = msg.dynamicData
  let control = null

  const startTime = Date.now()

  let output = `Executing action: ${step.action.name} `
  startStep(output)

  try {
    const actionMsg = await MessageBuilder().setContent(step)
      .setParent(parent)
      .setChild(child)
      .setDynamicData(dynamicData)
      .build()

    const resultMsg = await step.action(actionMsg)
    const result = resultMsg.content

    status = result.status
    data = result.data
    parent = resultMsg.parent
    child = resultMsg.child
    dynamicData = result.dynamicData
    control = step.control

    // Record Action Details in-order
    if (control != null) {
      output += `against ${control.name} `
    }
    if (data != null) {
      output += `with data: ${data}.`
    } else {
      output = output.trimRight() + '.'
    }
    details.push(output)
    result.details.forEach(detail => {
      details.push(detail)
    })

    // Small Buffer between each action
    if (parent != null) await parent.sleep(500)

    endStep(Status.Passed)
  } catch (e) {
    endStep(Status.Failed)
    output = `An exception was triggered while executing action: ${step.action.name} : ${e.message} : ${e.stack}.`
    status = 'fail'
    details.push(output)
  }

  const endTime = Date.now()
  const actionResult = await ResultBuilder().setChild(child)
    .setParent(parent)
    .setData(data)
    .setDynamicData(dynamicData)
    .setStatus(status)
    .setDetails(details)
    .setStartTime(startTime)
    .setEndTime(endTime)
    .build()

  const msgResult = await MessageBuilder().setContent(actionResult)
    .setParent(parent)
    .setChild(child)
    .build()

  return Object.freeze(msgResult)
}

module.exports = {
  invokeAction
}
