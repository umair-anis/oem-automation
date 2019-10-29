'use strict'

let { actions } = require('../../../../core/action/actions')
let { usersUI } = require('../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for searching the Blacklist table with a search term
 * @returns Scenario
 */
let enterFilter = async (search = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().tableFilter)
                            .setAction(await actions().enterFilterResult)
                            .setData([ search ])
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Filter with search: ${search}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterFilter
}