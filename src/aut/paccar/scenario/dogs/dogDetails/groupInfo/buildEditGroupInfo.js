'use strict'

let { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

let { clickGroupInfoTab } = require('./clickGroupInfoTab')
let { clickEdit } = require('./clickEdit')
let { enterGroupName } = require('../../addDOGForm/enterGroupName')
let { enterGroupDescription } = require('../../addDOGForm/enterGroupDescription')
let { clickSave } = require('./clickSave')

/**
 * Build a scenario for changing a DOG's Group Information
 * @returns Scenario
 */
let buildEditGroupInfo = async (group = {}) => {

    // Scenarios
    const clickGroupInfoTabScenario = await clickGroupInfoTab()
    const clickEditScenario = await clickEdit()
    const enterGroupNameScenario = await enterGroupName(group.name)
    const enterGroupDescriptionScenario = await enterGroupDescription(group.description)
    const clickSaveScenario = await clickSave()

    const scenarios = [   clickGroupInfoTabScenario
                        , clickEditScenario
                        , enterGroupNameScenario
                        , enterGroupDescriptionScenario
                        , clickSaveScenario ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Edit the DOG. Change the new Group Info to ${group.name}, ${group.description}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildEditGroupInfo
}