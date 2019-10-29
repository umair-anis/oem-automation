'use strict'

let { enterDeviceFilter } = require('../enterDeviceFilter')
let { clickAddAllExistingCollection } = require('./clickAddAllExistingCollection')
let { clickCollectionsCheckbox } = require('./clickCollectionsCheckbox')
let { clickOk } = require('./clickOk')

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let buildAddAllToExistingCollection = async (filter = [], collectionName = []) => {

    // Scenarios
    const enterDeviceFilterScenario = await enterDeviceFilter(filter)
    const clickAddAllExistingCollectionScenario = await clickAddAllExistingCollection()
    const clickCollectionsCheckboxScenario = await clickCollectionsCheckbox(collectionName)
    const clickOkScenario = await clickOk()


    const steps = await appendScenarios([ enterDeviceFilterScenario
                                        , clickAddAllExistingCollectionScenario
                                        , clickCollectionsCheckboxScenario
                                        , clickOkScenario ])

    const scenario = await ScenarioBuilder().setName(`Add all Devices in Filter: ${filter} to an Existing Collection: ${collectionName}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildAddAllToExistingCollection
}