'use strict'

let { actions } = require('../../../../core/action/actions')
let { permissionsUI } = require('../../repo/portalSideNavigation/permissions/permissionsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickDelete = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await permissionsUI().buttonSelectedDelete)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await permissionsUI().buttonConfirmDelete)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Delete, then Confirm Delete Permission`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickDelete
}