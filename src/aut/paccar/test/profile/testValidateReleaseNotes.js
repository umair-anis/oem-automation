'use strict'

const { buildTestValidateReleaseNotes } = require('./buildTestValidateReleaseNotes')
const { invokeTest } = require('../../../../core/test/invokeTest')

let testValidateReleaseNotes = async (env = {}, account = '') => {

    const test = await buildTestValidateReleaseNotes(env, account)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
  testValidateReleaseNotes
}
