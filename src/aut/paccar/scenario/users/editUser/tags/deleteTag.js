'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { usersUI } = require('../../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let deleteTag = async (key = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().cardContent)
                            .setAction(await actions().clickCardDeleteButton)
                            .setData(key)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Search to delete Key: ${key}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    deleteTag
}