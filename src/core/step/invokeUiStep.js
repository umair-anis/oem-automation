'use strict'

const { invokeAction } = require('../action/invokeAction')
const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')
const { invokeSearch } = require('../search/invokeSearch')
const { logScreenshot } = require('../logging/logScreenshot')

/**
 * @description
 * @function invokeUiStep
 * @param {*} msg
 * @param {*} reporterConfig
 * @async
 * @returns {Message}
 * @example
 */
const invokeUiStep = async (msg = {}, reporterConfig = {}) => {
  const step = msg.content
  const details = []
  const control = step.control
  let actionResultMsg = {}
  let data = ''
  let dynamicData = msg.dynamicData
  let parent = null
  let child = null
  let status = ''

  try {
    parent = msg.parent

    if (step.isCustomAction === false && control != null && step.action.name !== 'wait' && step.action.name !== 'waitToDisappear') {
      const searchResultMsg = await invokeSearch(msg)
      const searchResult = searchResultMsg.content
      const searchStatus = searchResult.status.toLowerCase()
      const searchDetails = searchResult.details

      child = searchResultMsg.child

      searchDetails.forEach(detail => {
        details.push(detail)
      })

      status = searchStatus

      if (searchStatus === 'pass') {
        step.child = child
        const actionMsg = await MessageBuilder().setContent(step)
          .setParent(parent)
          .setChild(child)
          .setDynamicData(dynamicData)
          .build()

        actionResultMsg = await invokeAction(actionMsg)
      }
    } else {
      const actionMsg = await MessageBuilder().setContent(step)
        .setParent(parent)
        .setChild(child)
        .setDynamicData(dynamicData)
        .build()

      actionResultMsg = await invokeAction(actionMsg)
    }

    const actionResult = actionResultMsg.content

    parent = actionResultMsg.parent
    dynamicData = actionResult.dynamicData
    data = actionResult.data
    status = actionResult.status

    actionResult.details.forEach(detail => {
      details.push(detail)
    })

    // Report a screenshot taken immediately after invoking a Failed Action
    // Report the test details leading up to the Failed Action
    if (parent != null) {
      if (status === 'fail') {
        const screenshotData = await parent.takeScreenshot()
        await logScreenshot(step.action.name, screenshotData, `screenshotAfter/png`)
        details.push(`UIStep FAILED: Last Action was ${step.action.name}. Screenshot of Failure Recorded.`)
      }
    }
  } catch (e) {
    details.push(`UIStep FAILED: Exception triggered invoking a UI step: ${e.message} ${e.stack}.`)
    status = 'fail'
  }

  const stepResult = await ResultBuilder().setChild(child)
    .setParent(parent)
    .setStatus(status)
    .setDetails(details)
    .setData(data)
    .setDynamicData(dynamicData)
    .build()

  const msgResult = await MessageBuilder().setContent(stepResult)
    .setParent(parent)
    .setDynamicData(dynamicData)
    .build()

  return Object.freeze(msgResult)
}

module.exports = {
  invokeUiStep
}
