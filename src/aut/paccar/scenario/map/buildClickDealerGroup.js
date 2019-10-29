'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickViewPaccarDealers } = require('./clickViewPaccarDealers')
let { clickGroupOfDealers } = require('./clickGroupOfDealers')
let { clickFrameTableLink } = require('./clickFrameTableLink')

let buildClickDealerGroup = async (dealerName = []) => {

    // Scenarios
    const clickViewPaccarDealersScenario = await clickViewPaccarDealers()
    const clickGroupOfDealersScenario = await clickGroupOfDealers()
    const clickFrameTableLinkScenario = await clickFrameTableLink(dealerName)

    // Steps:
    // 1. Click Edit a Manufacturer
    // 2. Click Delete
    const steps = await appendScenarios([ clickViewPaccarDealersScenario
                                        , clickGroupOfDealersScenario
                                        , clickFrameTableLinkScenario ])

    const scenario = await ScenarioBuilder().setName(`Click Dealer: ${dealerName} from Dealer Group Table`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildClickDealerGroup
}