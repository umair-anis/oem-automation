'use strict'

let { enterDeviceFilter } = require('../enterDeviceFilter')
let { clickAddAllNewCollection } = require('./clickAddAllNewCollection')
let { enterCollectionName } = require('./enterCollectionName')
let { enterCollectionDescription } = require('./enterCollectionDescription')
let { clickSaveNewCollection } = require('./clickSaveNewCollection')

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let buildAddAllToNewCollection = async (filter = [], collectionName = [], collectionDescription = []) => {

    // Scenarios
    const enterDeviceFilterScenario = await enterDeviceFilter(filter)
    const clickAddAllNewCollectionScenario = await clickAddAllNewCollection()
    const enterCollectionNameScenario = await enterCollectionName(collectionName)
    const enterCollectionDescriptionScenario = await enterCollectionDescription(collectionDescription)
    const clickSaveNewCollectionScenario = await clickSaveNewCollection()


    const steps = await appendScenarios([ enterDeviceFilterScenario
                                        , clickAddAllNewCollectionScenario
                                        , enterCollectionNameScenario
                                        , enterCollectionDescriptionScenario
                                        , clickSaveNewCollectionScenario ])

    const scenario = await ScenarioBuilder().setName(`Add all Devices in Filter: ${filter} to a New Collection: ${collectionName}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildAddAllToNewCollection
}