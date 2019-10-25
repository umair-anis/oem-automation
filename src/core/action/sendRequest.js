/**
 * @name sendRequest
 */
'use strict'

const { buildRequest } = require('../rest/buildRequest')
const { calculateIterations } = require('../iteration/calculateIterations')
const { DynamicDataBuilder } = require('../data/DynamicDataBuilder')
const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function sendRequest
 * @description Send a REST service call
 * 
 * @param {MessageBuilder} msg 
 */
const sendRequest = async (msg = {}) => {
  let dynamicData = null
  let status = 'pass'
  const details = []
  let updatedIterations = 0
  let startTime = null
  let endTime = null
  const step = msg.step
  const endpoint = msg.endpoint
  const request = await buildRequest(endpoint)

  try {
    startTime = Date.now()

    const res = await request.send()

    endTime = Date.now()

    if (res.status !== 200) {
      status = 'fail'
      details.push(`Failed to execute a ${type} request against ${endpoint.url}. Status code returned is: ${res.status}.`)
    } else {
      details.push(`Action Successful: Executed a ${type} request against ${endpoint.url}.`)
    }
  } catch (e) {
    status = 'fail'
    details.push(`Action FAILED: Exception triggered while executing a ${type} request against the endpoint: ${endpoint.url}. ${e.message} : ${e.stack}.`)
  }

  if (step.persistResults) {
    const data = await step.dataParser(res.body)

    dynamicData = await DynamicDataBuilder().setKey(step.dataKey)
      .setValues(data)
      .build()

    updatedIterations = await calculateIterations(data)
  }

  const result = await ResultBuilder().setStartTime(startTime)
    .setEndTime(endTime)
    .setStatus(status)
    .setDetails(details)
    .setData(endpoint.url)
    .setDynamicData(data)
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setDynamicData(dynamicData)
    .setUpdatedIterations(updatedIterations)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  sendRequest
}
