'use strict'

let { actions } = require('../../../../../core/action/actions')
let { deviceCollectionUI } = require('../../../repo/portalSideNavigation/deviceCollection/deviceCollectionUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterCollectionDescription = async (description = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await deviceCollectionUI().fieldCollectionDescription)
                            .setAction(await actions().enter)
                            .setData(description)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Collection description: ${description}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterCollectionDescription
}