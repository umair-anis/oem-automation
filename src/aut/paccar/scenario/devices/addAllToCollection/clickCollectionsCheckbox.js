'use strict'

let { actions } = require('../../../../../core/action/actions')
let { devicesUI } = require('../../../repo/portalSideNavigation/devices/devicesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickCollectionsCheckbox = async (collectionName = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await devicesUI().deviceCollectionsTable)
                            .setAction(await actions().clickTableCheckbox)
                            .setData(collectionName)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Device Collection Checkbox with name: ${collectionName}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickCollectionsCheckbox
}