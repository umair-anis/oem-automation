'use strict'

let { actions } = require('../../../../../core/action/actions')
let { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let { buildElement } = require('../../../../../core/element/buildElement')

let clickDeleteGroup = async (name = []) => {

    let steps = []

    const buttonTrash = buildElement(`buttonTrash`, `xpath`, `//div[@ng-repeat="vehicleGroup in $ctrl.vehicleGroups"]//span[contains(text(), "${name}")]/../button[3]`)
    steps.push(await StepBuilder().setControl(await buttonTrash)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await customersUI().buttonConfirmDelete)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await customersUI().promptVehicleGroupDeleted)
                            .setAction(await actions().isDisplayed)
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Delete Vehicle Group')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickDeleteGroup
}