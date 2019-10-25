/**
 * @name validate
 */
'use strict'

const { getCurrentIterationData } = require('../iteration/getCurrentIterationData')
const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function validate
 * @description Validate the scraper
 * 
 * @param {MessageBuilder} msg 
 */
const validate = async (msg = {}) => {
  const step = msg.content
  const testData = await getCurrentIterationData(msg)
  const validator = await step.validator
  const uiData = await step.scraper(msg)
  const result = await validator(testData, uiData)

  const transferResults = await ResultBuilder().setChild(msg.child)
    .setParent(msg.parent)
    .setData(testData)
    .setDetails([`Action Successful: Validate Test Data against UIData ${uiData}`])
    .setStatus(result.status)
    .build()

  const msgResult = await MessageBuilder().setParent(msg.parent)
    .setChild(msg.child)
    .setContent(transferResults)
    .build()

  return Object.freeze(msgResult)
}

module.exports = {
  validate
}
