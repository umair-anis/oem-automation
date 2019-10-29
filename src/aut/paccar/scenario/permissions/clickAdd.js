'use strict'

let { actions } = require('../../../../core/action/actions')
let { permissionsUI } = require('../../repo/portalSideNavigation/permissions/permissionsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickAdd = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await permissionsUI().buttonAddPermission)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Add Permission`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickAdd
}