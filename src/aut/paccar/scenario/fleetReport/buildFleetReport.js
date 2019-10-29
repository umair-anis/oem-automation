'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { selectEngineFamily } = require('./selectEngineFamily')
let { selectEngineModel } = require('./selectEngineModel')
let { selectDuration } = require('./selectDuration')
let { enterStartDate } = require('./enterStartDate')
let { enterEndDate } = require('./enterEndDate')
let { clickRun } = require('./clickRun')

/**
 * Build a scenario for selecting a engine family, model, dates and click run
 * @returns Scenario
 */
let buildFleetReport = async (report = {}) => {

    // Scenarios
    const selectEngineFamilyScenario = await selectEngineFamily(report.engineFamily)
    const selectEngineModelScenario = await selectEngineModel(report.engineModelYear)
    const selectDurationScenario = await selectDuration(report.duration)
    const enterStartDateScenario = await enterStartDate(report.startDate)
    const enterEndDateScenario = await enterEndDate(report.endDate)
    const clickRunScenario = await clickRun()

    const scenarios = [   selectEngineFamilyScenario
                        , selectEngineModelScenario
                        , selectDurationScenario ]

    // if not a custom duration, do not enter start and end date because it would switch to custom anyways
    if(report.duration.toString() == `Custom`){
        scenarios.push(enterStartDateScenario)
        scenarios.push(enterEndDateScenario)
    }

    scenarios.push(clickRunScenario)

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Build Fleet Report: Set Engine family, Set engine model, Set dates, Click Run`)
                                            .setSteps(steps)
                                            .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildFleetReport
}