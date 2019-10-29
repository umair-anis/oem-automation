'use strict'

let { buildTestUniversalFilter } = require('./buildTestUniversalFilter')
let { invokeTest } = require('../../../../core/test/invokeTest')

let testUniversalFilter = async (env = {}, credential = '') => {

    const test = await buildTestUniversalFilter(env, credential)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testUniversalFilter
}