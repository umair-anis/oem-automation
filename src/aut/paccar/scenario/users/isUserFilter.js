'use strict'

let { actions } = require('../../../../core/action/actions')
let { usersUI } = require('../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let isUserFilter = async (filter = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().tableFilter)
                                    .setAction(await actions().isCurrentFilter)
                                    .setData(filter)
                                    .build())

    const scenario = await ScenarioBuilder().setName(`Check if filter: ${filter} is a current vehicle filter`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    isUserFilter
}