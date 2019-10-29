'use strict'

let { actions } = require('../../../../core/action/actions')
let { fleetReportUI } = require('../../repo/portalSideNavigation/fleetReport/fleetReportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let selectEngineFamily = async (family = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await fleetReportUI().dropdownEngineFamily)
                                    .setAction(await actions().select)
                                    .setData(family)
                                    .build())

    let scenario = await ScenarioBuilder().setName(`Select Engine Family: ${family}`)
                                          .setSteps(steps)
                                          .build()

    return Object.freeze(scenario)
}

module.exports = {
    selectEngineFamily
}