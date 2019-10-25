'use strict'

const { invokeDatabaseStep } = require('./invokeDatabaseStep')
const { invokeRestStep } = require('./invokeRestStep')
const { invokeUiStep } = require('./invokeUiStep')

/**
 * @description
 * @function invokeStepStrategy
 * @param {*} msg
 * @param {*} reporterConfig
 * @async
 * @returns {Message}
 * @example
 */
const invokeStepStrategy = async (msg = {}, reporterConfig = {}) => {
  const step = msg.content
  let resultMsg = {}

  if (step.isUi) {
    resultMsg = await invokeUiStep(msg, reporterConfig = {})
  } else if (step.isRest) {
    resultMsg = await invokeRestStep(msg, reporterConfig = {})
  } else {
    resultMsg = await invokeDatabaseStep(msg, reporterConfig = {})
  }

  return Object.freeze(resultMsg)
}

module.exports = {
  invokeStepStrategy
}
