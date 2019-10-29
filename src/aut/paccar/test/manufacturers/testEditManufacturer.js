'use strict'

const { buildTestEditManufacturer } = require('./buildTestEditManufacturer')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testEditManufacturer = async (env = {}, credential = '', data = {}) => {

  const name = [data.manufacturer]
  
  const test = await buildTestEditManufacturer(env, credential, name)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testEditManufacturer
}
