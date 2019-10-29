'use strict'

let { actions } = require('../../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let { buildElement } = require('../../../../../core/element/buildElement')

let clickEditGroup = async (name = []) => {

    let steps = []

    const buttonEdit = buildElement(`buttonEdit`, `xpath`, `//div[@ng-repeat="vehicleGroup in $ctrl.vehicleGroups"]//span[contains(text(), "${name}")]/../button[2]`)
    steps.push(await StepBuilder().setControl(await buttonEdit)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Edit Vehicle Group')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickEditGroup
}