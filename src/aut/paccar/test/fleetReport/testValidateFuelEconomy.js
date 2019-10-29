'use strict'

let { buildTestValidateFuelEconomy } = require('./buildTestValidateFuelEconomy')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { FleetReportBuilder } = require('../../data/fleetReport/FleetReportBuilder')

let testValidateFuelEconomy = async (env = {}, credential = '') => {

    const fleetReport = await FleetReportBuilder().setEngineFamily(`All`)
                                                  .setEngineModelYear(`All`)
                                                  .setDuration(`Last 90 days`)
                                                  .setTop5( [`1XKYDP9X2JJ201673`, `1XPBDK9X7KD604180`, `1XKYD49X0HJ167001`, `3WKYDP9X8JF504770`, `1XPBDP9X0KD626857`] )
                                                  .setBottom5( [`1XPBDP9X4KD606174`, `1XKYDP9X5HJ988676`, `1XPBDP9X7JD462635`, `1XKYDP9X8HJ144082`, `1NKZXKTX2JJ207880`] )
                                                  .build()

    const test = await buildTestValidateFuelEconomy(env, credential, fleetReport)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testValidateFuelEconomy
}