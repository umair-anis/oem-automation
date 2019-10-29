'use strict'

let { actions } = require('../../../../../../../core/action/actions')
let { usersUI } = require('../../../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../../core/step/StepBuilder')

let enterVIN = async (vin = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().fieldVin)
                            .setAction(await actions().enter)
                            .setData(vin)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter VIN: ${vin}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterVIN
}