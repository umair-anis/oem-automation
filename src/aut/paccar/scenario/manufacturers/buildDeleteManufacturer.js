'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickManufacturerLink } = require('./clickManufacturerLink')
let { clickDeleteManufacturer } = require('./clickDeleteManufacturer')
let { alertDeleteManufacturer } = require('./alertDeleteManufacturer')

let buildDeleteManufacturer = async (name = []) => {

    // Scenarios
    const clickManufacturerLinkScenario = await clickManufacturerLink(name)
    const clickDeleteManufacturerScenario = await clickDeleteManufacturer()
    const alertDeleteManufacturerScenario = await alertDeleteManufacturer()

    // Steps:
    // 1. Click Edit a Manufacturer
    // 2. Click Delete
    // 3. Check for Delete alert
    const scenarios = [   clickManufacturerLinkScenario
                        , clickDeleteManufacturerScenario
                        , alertDeleteManufacturerScenario ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Delete Manufacturer: ${name}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildDeleteManufacturer
}