'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterBasicInformation = async (unitNumber = [], description = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().fieldUnitNumber)
                            .setAction(await actions().enter)
                            .setData(unitNumber)
                            .build())

    steps.push(await StepBuilder().setControl(await vehiclesUI().fieldDescription)
                            .setAction(await actions().enter)
                            .setData(description)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Basic Information: ${unitNumber}, ${description}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterBasicInformation
}