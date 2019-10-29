'use strict'

let { buildTestVehicleFaultGraph } = require('./buildTestVehicleFaultGraph')
let { invokeTest } = require('../../../../core/test/invokeTest')

let testVehicleFaultGraph = async (env = {}, credential = '') => {

    const test = await buildTestVehicleFaultGraph(env, credential)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testVehicleFaultGraph
}