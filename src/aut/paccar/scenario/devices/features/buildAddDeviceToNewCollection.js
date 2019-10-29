'use strict'

let { clickDeviceCheckbox } = require('../clickDeviceCheckbox')
let { clickSelectedMoreOptions } = require('./clickSelectedMoreOptions')
let { clickAddSelectedNewCollection } = require('./clickAddSelectedNewCollection')
let { enterCollectionName } = require('../addAllToCollection/enterCollectionName')
let { enterCollectionDescription } = require('../addAllToCollection/enterCollectionDescription')
let { clickSaveNewCollection } = require('../addAllToCollection/clickSaveNewCollection')

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let buildAddDeviceToNewCollection = async (deviceName = [], collectionName = [], collectionDescription = []) => {

    // Scenarios
    const clickDeviceCheckboxScenario = await clickDeviceCheckbox(deviceName)
    const clickSelectedMoreOptionsScenario = await clickSelectedMoreOptions()
    const clickAddSelectedNewCollectionScenario = await clickAddSelectedNewCollection()
    const enterCollectionNameScenario = await enterCollectionName(collectionName)
    const enterCollectionDescriptionScenario = await enterCollectionDescription(collectionDescription)
    const clickSaveNewCollectionScenario = await clickSaveNewCollection()

    const scenarios = [   clickDeviceCheckboxScenario
                        , clickSelectedMoreOptionsScenario
                        , clickAddSelectedNewCollectionScenario
                        , enterCollectionNameScenario
                        , enterCollectionDescriptionScenario
                        , clickSaveNewCollectionScenario ]


    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Add a Device: ${deviceName} to a New Collection: ${collectionName}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildAddDeviceToNewCollection
}