'use strict'

const { buildTestValidateGeneralSearch } = require('./buildTestValidateGeneralSearch')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testValidateGeneralSearch = async (env = {}, credential = '') => {
  const test = await buildTestValidateGeneralSearch(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testValidateGeneralSearch
}
