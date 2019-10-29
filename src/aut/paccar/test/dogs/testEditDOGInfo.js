'use strict'

const { buildTestEditDOGInfo } = require('./buildTestEditDOGInfo')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testEditDOGInfo = async (env = {}, credential = '') => {
  const test = await buildTestEditDOGInfo(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testEditDOGInfo
}
