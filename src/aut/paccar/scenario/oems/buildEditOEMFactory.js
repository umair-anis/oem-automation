'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickOEMLink } = require('./clickOEMLink')
let { buildAddFactory } = require('./buildAddFactory')
let { validateOEMFormErrors } = require('./validateOEMFormErrors')
let { buildEditFactory } = require('./buildEditFactory')
let { clickDeleteFactory } = require('./clickDeleteFactory')
let { clickSaveOEM } = require('./clickSaveOEM')

let buildEditOEMFactory = async (oem = {}, factory = {}) => {

    const factoryHeader = [ factory.city.toString() + ` Factory (${factory.code})` ]
    const editedLongitude = ["-97"]

    const factoryFormErrors = [`City is required.`, `Code is required.`, `Longitude is required.`, `Latitude is required.`]

    // Scenarios
    const clickOEMLinkScenario = await clickOEMLink(oem.name)
    const buildAddFactoryScenario = await buildAddFactory(factory)
    const validateOEMFormErrorsScenario = await validateOEMFormErrors(factoryFormErrors)
    const buildEditFactoryScenario = await buildEditFactory(factoryHeader, factory.city, factory.code, editedLongitude, factory.latitude)
    const clickDeleteFactoryScenario = await clickDeleteFactory(factoryHeader)
    const clickSaveOEMScenario = await clickSaveOEM()

    const scenarios = [   clickOEMLinkScenario
                        , buildAddFactoryScenario
                        , validateOEMFormErrorsScenario
                        , buildEditFactoryScenario
                        , clickDeleteFactoryScenario
                        , clickSaveOEMScenario ]

    // Steps:
    // 1. Click Edit OEM by 'oemName'
    // 2. Factory Information
    // 3. Save Factory
    // 4. Save OEM
    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Add, Edit, and Remove a Factory: ${factory.city} in OEM: ${oem.name}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildEditOEMFactory
}