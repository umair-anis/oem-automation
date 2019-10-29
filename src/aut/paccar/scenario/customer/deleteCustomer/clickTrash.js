'use strict'

let { actions } = require('../../../../../core/action/actions')
let { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickTrash = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await customersUI().buttonSelectedDelete)
                                    .setAction(await actions().click)
                                    .build())

    steps.push(await StepBuilder().setControl(await customersUI().buttonConfirmDelete)
                                    .setAction(await actions().click)
                                    .build())

    const scenario = await ScenarioBuilder().setName('Click Trash, Then Confirm delete')
        .setSteps(steps)
        .build()

    return Object.freeze(scenario)
}

module.exports = {
    clickTrash
}