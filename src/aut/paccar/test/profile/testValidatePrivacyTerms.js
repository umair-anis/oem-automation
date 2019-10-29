'use strict'

const { buildTestValidatePrivacyTerms } = require('./buildTestValidatePrivacyTerms')
const { invokeTest } = require('../../../../core/test/invokeTest')

let testValidatePrivacyTerms = async (env = {}, account = '') => {

    const test = await buildTestValidatePrivacyTerms(env, account)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
  testValidatePrivacyTerms
}
