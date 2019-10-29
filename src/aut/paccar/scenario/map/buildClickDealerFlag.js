'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickViewPaccarDealers } = require('./clickViewPaccarDealers')
let { clickDealerFlag } = require('./clickDealerFlag')
let { clickFrameDealerLink } = require('./clickFrameDealerLink')

let buildClickDealerFlag = async () => {

    // Scenarios
    const clickViewPaccarDealersScenario = await clickViewPaccarDealers()
    const clickDealerFlagScenario = await clickDealerFlag()
    const clickFrameDealerLinkScenario = await clickFrameDealerLink()

    // Steps:
    // 1. Click Edit a Manufacturer
    // 2. Click Delete
    const steps = await appendScenarios([ clickViewPaccarDealersScenario
                                        , clickDealerFlagScenario
                                        , clickFrameDealerLinkScenario ])

    const scenario = await ScenarioBuilder().setName(`Click Dealer Flag`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildClickDealerFlag
}