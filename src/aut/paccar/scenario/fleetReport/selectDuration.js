'use strict'

let { actions } = require('../../../../core/action/actions')
let { fleetReportUI } = require('../../repo/portalSideNavigation/fleetReport/fleetReportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let selectDuration = async (duration = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await fleetReportUI().dropdownDuration)
                                    .setAction(await actions().select)
                                    .setData(duration)
                                    .build())

    let scenario = await ScenarioBuilder().setName(`Select Duration: ${duration}`)
                                          .setSteps(steps)
                                          .build()

    return Object.freeze(scenario)
}

module.exports = {
    selectDuration
}