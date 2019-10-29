'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { clickTripEvent } = require('./table/clickTripEvent')
let { validateTripIDFault } = require('./validateTripIDFault')

let buildVaidateTripAuditFault = async (tripID = [], text = []) => {

    // Scenarios
    const clickTripEventScenario = await clickTripEvent(tripID)
    const validateTripIDFaultScenario = await validateTripIDFault(text)

    var scenarios = [ clickTripEventScenario
                    , validateTripIDFaultScenario ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Validate Trip Audit: ${tripID} Fault contains: ${text}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildVaidateTripAuditFault
}