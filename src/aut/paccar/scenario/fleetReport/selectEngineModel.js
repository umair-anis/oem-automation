'use strict'

let { actions } = require('../../../../core/action/actions')
let { fleetReportUI } = require('../../repo/portalSideNavigation/fleetReport/fleetReportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let selectEngineModel = async (modelYear = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await fleetReportUI().dropdownEngineModelYear)
                                    .setAction(await actions().select)
                                    .setData(modelYear)
                                    .build())

    let scenario = await ScenarioBuilder().setName(`Select Engine Model Year: ${modelYear}`)
                                          .setSteps(steps)
                                          .build()

    return Object.freeze(scenario)
}

module.exports = {
    selectEngineModel
}