'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { enterGroupName } = require('./enterGroupName')
let { enterGroupDescription } = require('./enterGroupDescription')
let { clickSaveAddDOG } = require('./clickSaveAddDOG')

/**
 * Build a scenario for adding a DOG
 * @returns Scenario
 */
let buildAddDOG = async (group = {}) => {

    // Scenarios
    const enterGroupNameScenario = await enterGroupName(group.name)
    const enterGroupDescriptionScenario = await enterGroupDescription(group.description)
    const clickSaveAddDOGScenario = await clickSaveAddDOG()

    const scenarios = [   enterGroupNameScenario
                        , enterGroupDescriptionScenario
                        , clickSaveAddDOGScenario ]
                        
    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName('Enter a DOG Name and Description, Click Save')
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildAddDOG
}