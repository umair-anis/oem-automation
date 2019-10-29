'use strict'

let { buildTestAddInvalidDestination } = require('./buildTestAddInvalidDestination')
let { invokeTest } = require('../../../../core/test/invokeTest')

let testAddInvalidDestination = async (env = {}, credential = '') => {

    const test = await buildTestAddInvalidDestination(env, credential)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testAddInvalidDestination
}