'use strict'

let { actions } = require('../../../../../core/action/actions')
let { devicesUI } = require('../../../repo/portalSideNavigation/devices/devicesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterCollectionDescription = async (description = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await devicesUI().fieldCollectionDescription)
                            .setAction(await actions().enter)
                            .setData(description)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Collection Description: ${description}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterCollectionDescription
}