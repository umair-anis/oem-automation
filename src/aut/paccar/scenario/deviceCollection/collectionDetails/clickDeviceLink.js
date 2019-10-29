'use strict'

let { actions } = require('../../../../../core/action/actions')
let { deviceCollectionUI } = require('../../../repo/portalSideNavigation/deviceCollection/deviceCollectionUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickDeviceLink = async (dsn = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await deviceCollectionUI().availableDevicesFilter)
                            .setAction(await actions().enterFilterResult)
                            .setData([ dsn ])
                            .build())

    steps.push(await StepBuilder().setControl(await deviceCollectionUI().availableDevicesTable)
                            .setAction(await actions().clickTableLink)
                            .setData(dsn)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Available Devices Link with DSN: ${dsn}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickDeviceLink
}