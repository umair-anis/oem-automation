'use strict'

const { buildTestClickDealerFlag } = require('./buildTestClickDealerFlag')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testClickDealerFlag = async (env = {}, credential = '') => {
  const test = await buildTestClickDealerFlag(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testClickDealerFlag
}
