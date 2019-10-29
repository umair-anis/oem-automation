'use strict'

let { actions } = require('../../../../core/action/actions')
let { permissionsUI } = require('../../repo/portalSideNavigation/permissions/permissionsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickEdit = async () => {

    let steps = []
    steps.push(await StepBuilder().setControl(await permissionsUI().buttonSelectedEdit)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Edit Permission`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickEdit
}