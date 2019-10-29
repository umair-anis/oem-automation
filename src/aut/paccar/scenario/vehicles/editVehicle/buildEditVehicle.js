'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { clickEditVehicle } = require('./clickEditVehicle')

let { isEditVehicleDisplayed } = require('./isEditVehicleDisplayed')
let { enterDSN } = require('./enterDSN')
let { enterChassisInformation } = require('./enterChassisInformation')
let { enterBasicInformation } = require('./enterBasicInformation')
let { enterSubscriptionInformation } = require('./enterSubscriptionInformation')
let { enterLicenseStatus } = require('./enterLicenseStatus')
let { selectOTAStatus } = require('./selectOTAStatus')
let { enterPrimaryDealer } = require('./enterPrimaryDealer')

let { clickSaveVehicle } = require('./clickSaveVehicle')

let buildEditVehicle = async (vehicle = {}) => {

    let steps = []

    const clickEditVehicleScenario = await clickEditVehicle()

    const isEditVehicleDisplayedScenario = await isEditVehicleDisplayed()
    const enterDSNScenario = await enterDSN(vehicle.dsn)
    const enterChassisInformationScenario = await enterChassisInformation(vehicle.year, vehicle.make, vehicle.model)
    const enterBasicInformationScenario = await enterBasicInformation(vehicle.unitNumber, vehicle.description)
    const enterSubscriptionInformationScenario = await enterSubscriptionInformation(vehicle.subscriptionStart, vehicle.subscriptionEnd)
    const enterLicenseStatusScenario = await enterLicenseStatus(vehicle.licenseStatus)
    const selectOTAStatusScenario = await selectOTAStatus(vehicle.otaSubscriptionStatus)
    const enterPrimaryDealerScenario = await enterPrimaryDealer(vehicle.primaryDealer)

    const clickSaveVehicleScenario = await clickSaveVehicle()

    // Because Edit Vehicle fields can vary based on user, do a check for 
    // value before implementing the scenarios
    const scenarios = [clickEditVehicleScenario, isEditVehicleDisplayedScenario]

    if(vehicle.dsn != '')
        scenarios.push(enterDSNScenario)

    if(vehicle.year != '')
        scenarios.push(enterChassisInformationScenario)

    if(vehicle.unitNumber != '')
        scenarios.push(enterBasicInformationScenario)

    if(vehicle.subscriptionStart != '')
        scenarios.push(enterSubscriptionInformationScenario)

    if(vehicle.licenseStatus != '')
        scenarios.push(enterLicenseStatusScenario)

    if(vehicle.otaSubscriptionStatus != '')
        scenarios.push(selectOTAStatusScenario)

    if(vehicle.primaryDealer != '')
        scenarios.push(enterPrimaryDealerScenario)

    scenarios.push(clickSaveVehicleScenario)

    // Steps:
    // 1. Click Edit Vehicle
    // 2. Edit Vehicle Information
    // 3. Click Save
    steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Edit Vehicle: ${vehicle.vin}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    buildEditVehicle
}