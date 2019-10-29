'use strict'

let { actions } = require('../../../../core/action/actions')
let { permissionsUI } = require('../../repo/portalSideNavigation/permissions/permissionsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickSave = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await permissionsUI().buttonSavePermission)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Save New Permission`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickSave
}