'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickAddFactory } = require('./clickAddFactory')
let { enterFactoryInformation } = require('./enterFactoryInformation')
let { clickDoneFactory } = require('./clickDoneFactory')

let buildAddFactory = async (factory = {}) => {

    // Scenarios
    const clickAddFactoryScenario = await clickAddFactory()
    const enterFactoryInformationScenario = await enterFactoryInformation(factory.city, factory.code, factory.longitude, factory.latitude)
    const clickDoneFactoryScenario = await clickDoneFactory()

    // Steps:
    // 1. Click Add Factory
    // 2. Enter Factory Information
    // 3. Click Done
    const steps = await appendScenarios([ clickAddFactoryScenario
                                        , enterFactoryInformationScenario
                                        , clickDoneFactoryScenario ])

    const scenario = await ScenarioBuilder().setName(`Add Factory: ${factory.city}, Code: ${factory.code}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildAddFactory
}