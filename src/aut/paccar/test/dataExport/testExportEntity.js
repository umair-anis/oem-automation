'use strict'

const { buildTestExportEntity } = require('./buildTestExportEntity')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testExportEntity = async (env = {}, credential = '') => {
  const test = await buildTestExportEntity(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testExportEntity
}
