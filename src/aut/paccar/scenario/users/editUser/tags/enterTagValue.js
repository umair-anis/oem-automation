'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { usersUI } = require('../../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let enterTagValue = async (value = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().fieldValue)
                            .setAction(await actions().enter)
                            .setData(value)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Key: ${value}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterTagValue
}