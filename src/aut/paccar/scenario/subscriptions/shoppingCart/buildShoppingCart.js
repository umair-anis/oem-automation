'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { selectSubscriptionDuration } = require('./selectSubscriptionDuration')
let { clickShowList } = require('./clickShowList')
let { clickCheckout } = require('./clickCheckout')

let buildShoppingCart = async (years = []) => {
    
    // Scenarios
    const selectSubscriptionDurationScenario = await selectSubscriptionDuration(years)
    const clickShowListScenario = await clickShowList()
    const clickCheckoutScenario = await clickCheckout()

    // Steps:
    // 1. Enter Duration Information
    // 2. Show the List of Subscriptions
    // 3. Click Checkout
    const steps = await appendScenarios([ selectSubscriptionDurationScenario
                                        , clickShowListScenario
                                        , clickCheckoutScenario ])

    const scenario = await ScenarioBuilder().setName(`Selection Cart Duration: ${years}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildShoppingCart
}