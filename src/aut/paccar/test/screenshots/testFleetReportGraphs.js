'use strict'

let { buildTestFleetReportGraphs } = require('./buildTestFleetReportGraphs')
let { invokeTest } = require('../../../../core/test/invokeTest')

let testFleetReportGraphs = async (env = {}, credential = '') => {

    const test = await buildTestFleetReportGraphs(env, credential)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testFleetReportGraphs
}