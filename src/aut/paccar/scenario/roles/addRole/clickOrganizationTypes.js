'use strict'

let { actions } = require('../../../../../core/action/actions')
let { buildElement } = require('../../../../../core/element/buildElement')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickOrganizationTypes = async (types = []) => {

    let steps = []
    let orgTypeCheckbox = null
    
    // Check the first box to ensure this scenario has at least one step
    orgTypeCheckbox = buildElement(`orgTypeCheckbox`, `xpath`, `//md-checkbox[@ng-repeat="organizationType in $ctrl.organizationTypes"]//div[contains(text(), "${types[0]}")]/..`)
    steps.push(await StepBuilder().setControl(await orgTypeCheckbox)
                            .setAction(await actions().click)
                            .build())

    for(var i = 1; i < types.length; i++){
        orgTypeCheckbox = buildElement(`orgTypeCheckbox`, `xpath`, `//md-checkbox[@ng-repeat="organizationType in $ctrl.organizationTypes"]//div[contains(text(), "${types[i]}")]/..`)
        steps.push(await StepBuilder().setControl(await orgTypeCheckbox)
                            .setAction(await actions().click)
                            .build())
    }

    const scenario = await ScenarioBuilder().setName(`Click Organization Types`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickOrganizationTypes
}