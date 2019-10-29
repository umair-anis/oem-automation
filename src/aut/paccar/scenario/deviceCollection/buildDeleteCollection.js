'use strict'

let { clickCollectionCheckbox } = require('./clickCollectionCheckbox')
let { clickCollectionDelete } = require('./clickCollectionDelete')
let { validateCollectionDeleted } = require('./validateCollectionDeleted')

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let buildDeleteCollection = async (name = []) => {

    // Scenarios
    const clickCollectionCheckboxScenario = await clickCollectionCheckbox(name)
    const clickCollectionDeleteScenario = await clickCollectionDelete()
    const validateCollectionDeletedScenario = await validateCollectionDeleted()

    const scenarios = [   clickCollectionCheckboxScenario
                        , clickCollectionDeleteScenario
                        , validateCollectionDeletedScenario ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Delete Collection: ${name}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildDeleteCollection
}