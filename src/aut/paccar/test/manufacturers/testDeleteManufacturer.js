'use strict'

const { buildTestDeleteManufacturer } = require('./buildTestDeleteManufacturer')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testDeleteManufacturer = async (env = {}, credential = '', data = {}) => {

  const name = [data.manufacturer]

  const test = await buildTestDeleteManufacturer(env, credential, name)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testDeleteManufacturer
}
