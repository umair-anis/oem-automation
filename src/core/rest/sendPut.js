'use strict'

const { cloneDeep } = require('lodash')
const { put } = require('superagent')
const { getAgent } = require('./getAgent')
const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @description Sends a PUT message to a RESTful service layer.
 * @function sendPut
 * @param {string} url URL of the REST endpoint.
 * @param {any} body Body to be included with the request. Can be null.
 * @async
 * @returns {Message} Returns a message object containing the status and details of the service call.
 * @example
 * 
 */
const sendPut = async (url = '', body = {}) => {
  let status = 'pass'
  const details = []
  const agent = await getAgent(url)
  const agentCopy = await cloneDeep(agent)

  const startTime = Date.now()

  try {
    const res = await put(url)
      .agent(agentCopy)
      .set('Content-Type', 'application/json')
      .send()

    if (res.status === 200) { 
      details.push(`Successfully executed PUT call.`)
    } else {
      status = 'fail'
      details.push(`Failed to execute PUT, received status code: ${res.status}.`)
    }
  } catch (e) {
    status = 'fail'
    details.push(`An exception was triggered while executing a PUT call: ${e.message} + ${e.stack}.`)
  }

  const endTime = Date.now()

  const result = await ResultBuilder().setStatus(status)
    .setDetails(details)
    .setStartTime(startTime)
    .setEndTime(endTime)
    .build()

  const msg = await MessageBuilder().setContent(result)
    .build()

  return Object.freeze(msg)
}

module.exports = {
  sendPut
}
