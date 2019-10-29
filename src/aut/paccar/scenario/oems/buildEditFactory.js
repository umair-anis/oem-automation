'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickEditFactory } = require('./clickEditFactory')
let { enterFactoryInformation } = require('./enterFactoryInformation')
let { clickDoneFactory } = require('./clickDoneFactory')

let buildEditFactory = async (factoryName = [], city = [], code = [], longitude = [], latitude = []) => {

    // Scenarios
    const clickEditFactoryScenario = await clickEditFactory(factoryName)
    const enterFactoryInformationScenario = await enterFactoryInformation(city, code, longitude, latitude)
    const clickDoneFactoryScenario = await clickDoneFactory()

    // Steps:
    // 1. Click Add Factory
    // 2. Enter Factory Information
    // 3. Click Done
    const steps = await appendScenarios([ clickEditFactoryScenario
                                        , enterFactoryInformationScenario
                                        , clickDoneFactoryScenario ])

    const scenario = await ScenarioBuilder().setName(`Edit Factory: ${factoryName}, Code: ${code}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildEditFactory
}