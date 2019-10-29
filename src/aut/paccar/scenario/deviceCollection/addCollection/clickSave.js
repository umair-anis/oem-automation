'use strict'

let { actions } = require('../../../../../core/action/actions')
let { deviceCollectionUI } = require('../../../repo/portalSideNavigation/deviceCollection/deviceCollectionUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickSave = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await deviceCollectionUI().buttonSaveNewCollection)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Save`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickSave
}