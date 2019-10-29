'use strict'

let { actions } = require('../../../../../core/action/actions')
let { deviceCollectionUI } = require('../../../repo/portalSideNavigation/deviceCollection/deviceCollectionUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterCollectionName = async (name = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await deviceCollectionUI().fieldCollectionName)
                            .setAction(await actions().enter)
                            .setData(name)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Collection name: ${name}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterCollectionName
}