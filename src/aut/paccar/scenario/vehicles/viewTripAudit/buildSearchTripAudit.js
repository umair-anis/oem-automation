'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { clickTripAudit } = require('./clickTripAudit')
let { enterVin } = require('./enterVin')
let { enterTripStartInformation } = require('./enterTripStartInformation')
let { selectTripEventType } = require('./selectTripEventType')
let { clickSearchTrips } = require('./clickSearchTrips')

let buildSearchTripAudit = async (tripAudit = {}) => {

    // Scenarios
    const clickTripAuditScenario = await clickTripAudit()
    const enterVinScenario = await enterVin(tripAudit.vin)
    const enterTripStartInformationScenario = await enterTripStartInformation(tripAudit.date, tripAudit.hour, tripAudit.minute)
    const selectTripEventTypeScenario = await selectTripEventType(tripAudit.eventType)
    const clickSearchTripsScenario = await clickSearchTrips()

    var scenarios = [ clickTripAuditScenario
                    , enterVinScenario
                    , enterTripStartInformationScenario
                    , selectTripEventTypeScenario
                    , clickSearchTripsScenario ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Enter Trip Audit Search Information`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildSearchTripAudit
}