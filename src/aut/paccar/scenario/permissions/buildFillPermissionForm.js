'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { enterName } = require('./enterName')
let { enterDescription } = require('./enterDescription')
let { clickSave } = require('./clickSave')
let { validatePermissionSaved } = require('./validatePermissionSaved')

let buildFillPermissionForm = async (name = [], description = []) => {

    // Scenarios
    const enterNameScenario = await enterName(name)
    const enterDescriptionScenario = await enterDescription(description)
    const clickSaveScenario = await clickSave()
    const validatePermissionSavedScenario = await validatePermissionSaved()

    const scenarios = [   enterNameScenario
                        , enterDescriptionScenario
                        , clickSaveScenario
                        , validatePermissionSavedScenario ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Enter Permission: ${name}, ${description}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildFillPermissionForm
}