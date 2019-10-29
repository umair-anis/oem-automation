'use strict'

let { actions } = require('../../../../../core/action/actions')
let { buildElement } = require('../../../../../core/element/buildElement')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickApplications = async (apps = []) => {

    let steps = []
    let appCheckbox = null
    
    // Check the first box to ensure this scenario has at least one step
    appCheckbox = buildElement(`appCheckbox`, `xpath`, `//md-checkbox[@ng-repeat="application in $ctrl.applications"]//div[contains(text(), "${apps[0]}")]/..`)
    steps.push(await StepBuilder().setControl(await appCheckbox)
                            .setAction(await actions().click)
                            .build())

    for(var i = 1; i < apps.length; i++){
        appCheckbox = buildElement(`appCheckbox`, `xpath`, `//md-checkbox[@ng-repeat="application in $ctrl.applications"]//div[contains(text(), "${apps[i]}")]/..`)
        steps.push(await StepBuilder().setControl(await appCheckbox)
                            .setAction(await actions().click)
                            .build())
    }

    const scenario = await ScenarioBuilder().setName(`Click Applications`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickApplications
}