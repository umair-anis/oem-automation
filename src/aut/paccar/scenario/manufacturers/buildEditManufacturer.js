'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickManufacturerLink } = require('./clickManufacturerLink')
let { enterManufacturerName } = require('./enterManufacturerName')
let { clickSaveManufacturer } = require('./clickSaveManufacturer')

let buildEditManufacturer = async (name = [], newName = []) => {

    // Scenarios
    const clickManufacturerLinkScenario = await clickManufacturerLink(name)
    const enterManufacturerNameScenario = await enterManufacturerName(newName)
    const clickSaveManufacturerScenario = await clickSaveManufacturer()

    // Steps:
    // 1. Click Edit a Manufacturer
    // 2. Enter a New Name
    // 3. Click Save
    const steps = await appendScenarios([ clickManufacturerLinkScenario
                                        , enterManufacturerNameScenario
                                        , clickSaveManufacturerScenario ])

    const scenario = await ScenarioBuilder().setName(`Edit Manufacturer: ${name} to ${newName}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildEditManufacturer
}