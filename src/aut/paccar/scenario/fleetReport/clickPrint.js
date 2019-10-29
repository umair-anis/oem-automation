'use strict'

let { actions } = require('../../../../core/action/actions')
let { fleetReportUI } = require('../../repo/portalSideNavigation/fleetReport/fleetReportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickPrint = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await fleetReportUI().buttonPrint)
                                    .setAction(await actions().waitUntilVisible)
                                    .setStaticWait(1000)
                                    .build())

    steps.push(await StepBuilder().setControl(await fleetReportUI().buttonPrint)
                                    .setAction(await actions().click)
                                    .build())

    const scenario = await ScenarioBuilder().setName('Click Print Report')
                                            .setSteps(steps)
                                            .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickPrint
}