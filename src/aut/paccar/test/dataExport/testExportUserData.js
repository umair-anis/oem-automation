'use strict'

const { buildTestExportUserData } = require('./buildTestExportUserData')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testExportUserData = async (env = {}, credential = '') => {
  const test = await buildTestExportUserData(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testExportUserData
}
