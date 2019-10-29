'use strict'

let { actions } = require('../../../../core/action/actions')
let { deviceCollectionUI } = require('../../repo/portalSideNavigation/deviceCollection/deviceCollectionUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let verifyDevicesFilter = async (collectionName = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await deviceCollectionUI().availableDevicesFilter)
                            .setAction(await actions().isCurrentFilter)
                            .setData(collectionName)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Verify Filter: ${collectionName} is a current Device Filter`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    verifyDevicesFilter
}