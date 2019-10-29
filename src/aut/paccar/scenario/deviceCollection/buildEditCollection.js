'use strict'

let { clickCollectionCheckbox } = require('./clickCollectionCheckbox')
let { clickCollectionEdit } = require('./clickCollectionEdit')
let { enterCollectionName } = require('./addCollection/enterCollectionName')
let { enterCollectionDescription } = require('./addCollection/enterCollectionDescription')
let { clickSave } = require('./addCollection/clickSave')

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let buildEditCollection = async (name = [], editedName = [], editedDescription = []) => {

    // Scenarios
    const clickCollectionCheckboxScenario = await clickCollectionCheckbox(name)
    const clickCollectionEditScenario = await clickCollectionEdit()
    const enterCollectionNameScenario = await enterCollectionName(editedName)
    const enterCollectionDescriptionScenario = await enterCollectionDescription(editedDescription)
    const clickSaveScenario = await clickSave()

    // Steps:
    // 1. Select a Device Collection
    // 2. Click Collection Edit Option
    // 3. Enter Collection Credentials
    // 4. Click Save
    const steps = await appendScenarios([ clickCollectionCheckboxScenario
                                        , clickCollectionEditScenario
                                        , enterCollectionNameScenario
                                        , enterCollectionDescriptionScenario
                                        , clickSaveScenario ])

    const scenario = await ScenarioBuilder().setName(`Edit Collection: ${name} to ${editedName}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildEditCollection
}