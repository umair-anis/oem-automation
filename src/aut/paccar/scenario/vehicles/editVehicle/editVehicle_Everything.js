'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { clickEditVehicle } = require('./clickEditVehicle')
let { enterVin } = require('./enterVin')
let { enterChassisInformation } = require('./enterChassisInformation')
let { enterDSN } = require('./enterDSN')
let { enterBasicInformation } = require('./enterBasicInformation')
let { enterSubscriptionInformation } = require('./enterSubscriptionInformation')
let { enterLicenseStatus } = require('./enterLicenseStatus')
let { selectOTAStatus } = require('./selectOTAStatus')
let { enterPrimaryDealer } = require('./enterPrimaryDealer')
let { clickSaveVehicle } = require('./clickSaveVehicle')

let editVehicle_Everything = async () => {

    const vin = ['0123456789']
    const year = ['2015']
    const make = ['brand']
    const model = ['model']
    const dsn = ['012345678']
    const unitNumber = ['1234321']
    const description = ['vehicle description']
    const subscriptionStart = ['1/21/2019']
    const subscriptionEnd = ['2/5/2019']
    const licenseStatus = ['INACTIVE']
    const otaStatus = ['INACTIVE']
    const primaryDealer = ['Not available']

    let steps = []

    const clickEditVehicleScenario = await clickEditVehicle()
    const enterVinScenario = await enterVin(vin)
    const enterChassisInformationScenario = await enterChassisInformation(year, make, model)
    const enterDSNScenario = await enterDSN(dsn)
    const enterBasicInformationScenario = await enterBasicInformation(unitNumber, description)
    const enterSubscriptionInformationScenario = await enterSubscriptionInformation(subscriptionStart, subscriptionEnd)
    const enterLicenseStatusScenario = await enterLicenseStatus(licenseStatus)
    const selectOTAStatusScenario = await selectOTAStatus(otaStatus)
    const enterPrimaryDealerScenario = await enterPrimaryDealer(primaryDealer)
    const clickSaveVehicleScenario = await clickSaveVehicle()

    // Steps:
    // 1. Click Edit Vehicle
    // 2. Enter Vehicle information
    // 4. Click Save
    steps = await appendScenarios([ clickEditVehicleScenario
                                  , enterVinScenario
                                  , enterChassisInformationScenario
                                  , enterDSNScenario 
                                  , enterBasicInformationScenario
                                  , enterSubscriptionInformationScenario
                                  , enterLicenseStatusScenario
                                  , selectOTAStatusScenario 
                                  , enterPrimaryDealerScenario
                                  , clickSaveVehicleScenario  ])

    const scenario = await ScenarioBuilder().setName(`Edit Vehicle: ${vin}, ${unitNumber}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    editVehicle_Everything
}