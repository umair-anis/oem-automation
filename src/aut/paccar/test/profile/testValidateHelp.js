'use strict'

let { buildTestValidateHelp } = require('./buildTestValidateHelp')
let { invokeTest } = require('../../../../core/test/invokeTest')

let testValidateHelp = async (env = {}, account = '') => {

    const test = await buildTestValidateHelp(env, account)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testValidateHelp
}