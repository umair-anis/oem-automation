'use strict'

let { actions } = require('../../../../../core/action/actions')
let { buildElement } = require('../../../../../core/element/buildElement')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickPermissions = async (permissions = []) => {

    let steps = []
    let permissionCheckbox = null
    
    // Check the first box to ensure this scenario has at least one step
    permissionCheckbox = buildElement(`permissionCheckbox`, `xpath`, `//md-checkbox[@ng-repeat="permission in $ctrl.permissions | filter: filter"]//div[contains(text(), "${permissions[0]}")]/..`)
    steps.push(await StepBuilder().setControl(await permissionCheckbox)
                            .setAction(await actions().click)
                            .build())

    for(var i = 1; i < permissions.length; i++){
        permissionCheckbox = buildElement(`permissionCheckbox`, `xpath`, `//md-checkbox[@ng-repeat="permission in $ctrl.permissions | filter: filter"]//div[contains(text(), "${permissions[i]}")]/..`)
        steps.push(await StepBuilder().setControl(await permissionCheckbox)
                            .setAction(await actions().click)
                            .build())
    }

    const scenario = await ScenarioBuilder().setName(`Click Permissions`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickPermissions
}