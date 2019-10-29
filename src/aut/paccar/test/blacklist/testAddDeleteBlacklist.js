'use strict'

let { buildTestAddDeleteBlacklist } = require('./buildTestAddDeleteBlacklist')
let { invokeTest } = require('../../../../core/test/invokeTest')

let testAddDeleteBlacklist = async (env = {}, credential = '', data = {}) => {

    const test = await buildTestAddDeleteBlacklist(env, credential)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testAddDeleteBlacklist
}