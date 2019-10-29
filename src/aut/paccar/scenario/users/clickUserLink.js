'use strict'

let { actions } = require('../../../../core/action/actions')
let { usersUI } = require('../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for searching the Blacklist table with a search term
 * @returns Scenario
 */
let clickUserLink = async (search = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().table)
                            .setAction(await actions().clickTableLink)
                            .setData(search)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Link with search term: ${search}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickUserLink
}