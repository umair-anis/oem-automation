'use strict'

let { actions } = require('../../../../core/action/actions')
let { permissionsUI } = require('../../repo/portalSideNavigation/permissions/permissionsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickPermissionCheckbox = async (name = []) => {

    let steps = []
    steps.push(await StepBuilder().setControl(await permissionsUI().tableFilter)
                            .setAction(await actions().enterFilterResult)
                            .setData([ name ])
                            .build())

    steps.push(await StepBuilder().setControl(await permissionsUI().table)
                            .setAction(await actions().clickTableCheckbox)
                            .setData(name)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Permission Checkbox: ${name}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickPermissionCheckbox
}