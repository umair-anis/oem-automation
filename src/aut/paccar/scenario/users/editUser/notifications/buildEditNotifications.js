'use strict'

let { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

let { clickNotificationsTab } = require('./clickNotificationsTab')
let { clickEmailNotifications } = require('./clickEmailNotifications')
let { buildClickCustomer } = require('./buildClickCustomer')
let { buildClickVehicleGroup } = require('./buildClickVehicleGroup')

/**
 * Build a scenario for Subscribing Customers and Subscribing Vehicle Groups
 * @returns Scenario
 */
let buildEditNotifications = async (userNotification = {}) => {

    const clickNotificationsTabScenario = await clickNotificationsTab()
    const clickEmailNotificationsScenario = await clickEmailNotifications(userNotification.emailNotifications)

    // Click Checckboxes for every customer and vehicle group name listed
    const subSteps = [clickNotificationsTabScenario, clickEmailNotificationsScenario]
    for(const customerName of userNotification.subscribedCustomers){
        subSteps.push(await buildClickCustomer(customerName))
    }
    for(const vehicleGroupName of userNotification.subscribedVehicleGroups){
        subSteps.push(await buildClickVehicleGroup(vehicleGroupName))
    }

    const steps = await appendScenarios(subSteps)

    const scenario = await ScenarioBuilder().setName(`Edit Notification to Click Subscribed Customers and Subscribed Vehicle Groups`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildEditNotifications
}