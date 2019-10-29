'use strict'

let { buildTestFiltersByType } = require('./buildTestFiltersByType')
let { invokeTest } = require('../../../../core/test/invokeTest')

let testCustomersFiltersByType = async (env = {}, credential = '') => {

    const test = await buildTestFiltersByType(env, credential)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testCustomersFiltersByType
}