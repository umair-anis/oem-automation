'use strict'

const { sendRequest } = require('../action/sendRequest')

/**
 * @description Invokes a service call step against the AUT.
 * @function invokeRestStep
 * @param {Message} msg Message function containing the Endpoint function having the details
 * necessary to execute th endpoint call.
 * @param {Reporter} reporterConfig Reporting object that reports out the step's result to a database.
 * @async
 * @returns {Message} Returns a Message function containing the results of the service call.
 * @example
 * const result = await invokeRestStep(msg, null)
 */
const invokeRestStep = async (msg = {}, reporterConfig = {}) => {
  const resultMsg = await sendRequest(msg)
  return Object.freeze(resultMsg)
}

module.exports = {
  invokeRestStep
}
