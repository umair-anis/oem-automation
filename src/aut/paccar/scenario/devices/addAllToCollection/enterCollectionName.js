'use strict'

let { actions } = require('../../../../../core/action/actions')
let { devicesUI } = require('../../../repo/portalSideNavigation/devices/devicesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterCollectionName = async (name = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await devicesUI().fieldCollectionName)
                            .setAction(await actions().enter)
                            .setData(name)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Collection Name: ${name}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterCollectionName
}