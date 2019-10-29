'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { clickEditVehicle } = require('./clickEditVehicle')
let { enterBasicInformation } = require('./enterBasicInformation')
let { enterSubscriptionInformation } = require('./enterSubscriptionInformation')
let { clickSaveVehicle } = require('./clickSaveVehicle')

// Can only edit Basic Information and Subscription Information
let editVehicle_User = async () => {

    const unitNumber = ['1234321']
    const description = ['vehicle description']
    const subscriptionStart = ['1/21/2019']
    const subscriptionEnd = ['2/5/2019']

    let steps = []

    const clickEditVehicleScenario = await clickEditVehicle()
    const enterBasicInformationScenario = await enterBasicInformation(unitNumber, description)
    const enterSubscriptionInformationScenario = await enterSubscriptionInformation(subscriptionStart, subscriptionEnd)
    const clickSaveVehicleScenario = await clickSaveVehicle()

    // Steps:
    // 1. Click Edit Vehicle
    // 2. Enter Vehicle information
    // 4. Click Save
    steps = await appendScenarios([ clickEditVehicleScenario
                                  , enterBasicInformationScenario
                                  , enterSubscriptionInformationScenario
                                  , clickSaveVehicleScenario  ])

    const scenario = await ScenarioBuilder().setName(`Edit Vehicle: ${unitNumber}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    editVehicle_User
}