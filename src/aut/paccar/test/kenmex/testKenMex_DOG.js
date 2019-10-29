'use strict'

const { buildTestKenMex_DOG } = require('./buildTestKenMex_DOG')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testKenMex_DOG = async (env = {}, credential = '') => {
  const test = await buildTestKenMex_DOG(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testKenMex_DOG
}
