'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { clickTabSubscribedUsers } = require('./clickTabSubscribedUsers')
let { searchSubscribedUsers } = require('./searchSubscribedUsers')
let { clickUserCheckbox } = require('./clickUserCheckbox')

let buildClickSubscribedUser = async (userName = []) => {

    // Scenarios
    const clickTabSubscribedUsersScenario = await clickTabSubscribedUsers()
    const searchSubscribedUsersScenario = await searchSubscribedUsers(userName)
    const clickUserCheckboxScenario = await clickUserCheckbox(userName)

    const scenarios = [  clickTabSubscribedUsersScenario
                       , searchSubscribedUsersScenario
                       , clickUserCheckboxScenario ]

    let steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Click Subscribed User: ${userName} Checkbox`)
                                            .setSteps(steps)
                                            .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildClickSubscribedUser
}