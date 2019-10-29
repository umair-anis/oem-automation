'use strict'

let { buildTestGetVehicleFault } = require('./buildTestGetVehicleFault')
let { invokeTest } = require('../../../../core/test/invokeTest')

let testGetVehicleFault = async (env = {}, credential = '') => {

    const test = await buildTestGetVehicleFault(env, credential)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testGetVehicleFault
}