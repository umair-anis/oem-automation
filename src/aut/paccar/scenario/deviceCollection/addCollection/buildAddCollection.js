'use strict'

let { clickCreateNewCollection } = require('./clickCreateNewCollection')
let { enterCollectionName } = require('./enterCollectionName')
let { enterCollectionDescription } = require('./enterCollectionDescription')
let { clickSave } = require('./clickSave')
let { validateCollectionAdded } = require('./validateCollectionAdded')

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let buildAddCollection = async (name = [], description = []) => {

    // Scenarios
    const clickCreateNewCollectionScenario = await clickCreateNewCollection()
    const enterCollectionNameScenario = await enterCollectionName(name)
    const enterCollectionDescriptionScenario = await enterCollectionDescription(description)
    const clickSaveScenario = await clickSave()
    const validateCollectionAddedScenario = await validateCollectionAdded()

    const scenarios = [   clickCreateNewCollectionScenario
                        , enterCollectionNameScenario
                        , enterCollectionDescriptionScenario
                        , clickSaveScenario
                        , validateCollectionAddedScenario ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Create New Device Collection with Name: ${name}, Descrption: ${description}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildAddCollection
}