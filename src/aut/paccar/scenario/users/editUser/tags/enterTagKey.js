'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { usersUI } = require('../../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let enterTagKey = async (key = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().fieldKey)
                            .setAction(await actions().enter)
                            .setData(key)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Key: ${key}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterTagKey
}