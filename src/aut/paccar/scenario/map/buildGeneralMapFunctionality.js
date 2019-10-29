'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickFullscreen } = require('./clickFullscreen')
let { clickZoomIn } = require('./clickZoomIn')
let { clickZoomOut } = require('./clickZoomOut')
let { clickRefresh } = require('./clickRefresh')
let { clickViewSatellite } = require('./clickViewSatellite')
let { clickViewPaccarDealers } = require('./clickViewPaccarDealers')
let { clickViewCumminsDistributors } = require('./clickViewCumminsDistributors')


let buildGeneralMapFunctionality = async (name = []) => {

    // Scenarios
    const clickFullscreenScenario = await clickFullscreen()
    const clickZoomInScenario = await clickZoomIn()
    const clickZoomOutScenario = await clickZoomOut()
    const clickRefreshScenario = await clickRefresh()
    const clickViewSatelliteScenario = await clickViewSatellite()
    const clickViewPaccarDealersScenario = await clickViewPaccarDealers()
    const clickViewCumminsDistributorsScenario = await clickViewSatellite()

    const scenarios = [ clickFullscreenScenario
                      , clickFullscreenScenario
                    
                      , clickZoomInScenario
                      , clickZoomInScenario
                      , clickZoomOutScenario
                      , clickZoomOutScenario
                    
                      , clickRefreshScenario

                      , clickViewSatelliteScenario
                      , clickViewSatelliteScenario
                    
                      , clickViewPaccarDealersScenario
                      , clickViewCumminsDistributorsScenario
                      , clickViewPaccarDealersScenario]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Interact with all Map manipulators`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildGeneralMapFunctionality
}