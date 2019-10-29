'use strict'

let { actions } = require('../../../../../core/action/actions')
let { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let { buildElement } = require('../../../../../core/element/buildElement')

let clickSubscribeGroup = async (name = []) => {

    let steps = []

    const buttonBell = buildElement(`buttonBell`, `xpath`, `//div[@ng-repeat="vehicleGroup in $ctrl.vehicleGroups"]//span[contains(text(), "${name}")]/../button[1]`)
    steps.push(await StepBuilder().setControl(await buttonBell)
                            .setAction(await actions().click)
                            .build())

    // Wait for the Vehicle Groups to load
    steps.push(await StepBuilder().setControl(await customersUI().tabVehicleGroups)
                            .setAction(await actions().isDisplayed)
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Subscribe to Vehicle Group')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickSubscribeGroup
}