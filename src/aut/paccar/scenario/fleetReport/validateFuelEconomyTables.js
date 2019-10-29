'use strict'

let { actions } = require('../../../../core/action/actions')
let { customActions } = require('../../customAction/customActions')
let { fleetReportUI } = require('../../repo/portalSideNavigation/fleetReport/fleetReportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let validateFuelEconomyTables = async (top5Links = [], bottom5Links = []) => {

    let steps = []

    // Wait for data to load
    steps.push(await StepBuilder().setControl(await fleetReportUI().tableTop5)
                                    .setAction(await actions().waitUntilVisible)
                                    .setStaticWait(1000)
                                    .build())

    steps.push(await StepBuilder().setControl(await fleetReportUI().tableTop5)
                                    .setAction(await customActions().validateFuelEconomyTable)
                                    .setData([ top5Links ])
                                    .build())

    steps.push(await StepBuilder().setControl(await fleetReportUI().tableBottom5)
                                    .setAction(await customActions().validateFuelEconomyTable)
                                    .setData([ bottom5Links ])
                                    .build())

    const scenario = await ScenarioBuilder().setName(`Validate Fuel Economy Table with VINs: ${top5Links} and ${bottom5Links}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateFuelEconomyTables
}