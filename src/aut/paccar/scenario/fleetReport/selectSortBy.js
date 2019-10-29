'use strict'

let { actions } = require('../../../../core/action/actions')
let { fleetReportUI } = require('../../repo/portalSideNavigation/fleetReport/fleetReportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let selectSortBy = async (type = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await fleetReportUI().dropdownSortBy)
                                    .setAction(await actions().select)
                                    .setData(type)
                                    .build())

    let scenario = await ScenarioBuilder().setName(`Select Sort By: ${type}`)
                                          .setSteps(steps)
                                          .build()

    return Object.freeze(scenario)
}

module.exports = {
    selectSortBy
}