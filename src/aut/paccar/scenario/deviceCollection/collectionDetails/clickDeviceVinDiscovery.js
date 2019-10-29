'use strict'

let { actions } = require('../../../../../core/action/actions')
let { deviceCollectionUI } = require('../../../repo/portalSideNavigation/deviceCollection/deviceCollectionUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickDeviceVinDiscovery = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await deviceCollectionUI().buttonMoreDeviceOptions)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await deviceCollectionUI().buttonDeviceVinDiscovery)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Device Vin Discovery`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickDeviceVinDiscovery
}