'use strict'

let { actions } = require('../../../../core/action/actions')
let { permissionsUI } = require('../../repo/portalSideNavigation/permissions/permissionsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let enterDescription = async (description = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await permissionsUI().fieldDescription)
                            .setAction(await actions().enter)
                            .setData(description)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Permission Description: ${description}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterDescription
}