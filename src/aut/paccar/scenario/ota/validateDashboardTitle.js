'use strict'

let { actions } = require('../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let { buildElement } = require('../../../../core/element/buildElement')

let validateDashboardTitle = async (title = []) => {

    let steps = []
    
    const titleDashboard = buildElement(`titleDashboard`, `xpath`, `//span[@ng-bind="$ctrl.title"][contains(text(), "${title}")]`)
    steps.push(await StepBuilder().setControl(await titleDashboard)
                            .setAction(await actions().isDisplayed)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validate Dashboard Title is: ${title}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateDashboardTitle
}