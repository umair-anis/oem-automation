'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickTabSnapshotData = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().tabSnapshotData)
                            .setAction(await actions().isDisplayed)
                            .build())
    steps.push(await StepBuilder().setControl(await vehiclesUI().tabSnapshotData)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Snapshot Data Tab`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickTabSnapshotData
}