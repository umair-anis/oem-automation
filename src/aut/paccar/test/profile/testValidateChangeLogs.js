'use strict'

const { buildTestValidateChangeLogs } = require('./buildTestValidateChangeLogs')
const { invokeTest } = require('../../../../core/test/invokeTest')

let testValidateChangeLogs = async (env = {}, account= '') => {

    const test = await buildTestValidateChangeLogs(env, account)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
  testValidateChangeLogs
}
