'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickSaveCustomer = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().buttonSaveCustomer)
                            .setAction(await actions().click)
                            .setStaticWait(3000)
                            .build())

    steps.push(await StepBuilder().setControl(await vehiclesUI().buttonConfirmButton)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Save Customer, Transfer Ownership`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickSaveCustomer
}