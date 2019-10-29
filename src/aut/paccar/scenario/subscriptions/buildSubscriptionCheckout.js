'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickSubscriptionsAddToCart } = require('./clickSubscriptionsAddToCart')
let { clickViewCart } = require('./clickViewCart')
let { buildShoppingCart } = require('./shoppingCart/buildShoppingCart')
let { buildContactInformation } = require('./contactInformation/buildContactInformation')
let { clickSubmitOrder } = require('./orderSummary/clickSubmitOrder')

let buildSubscriptionCheckout = async (checkout = {}) => {
    
    // Scenarios
    const clickSubscriptionsAddToCartScenario = await clickSubscriptionsAddToCart(checkout.subscription)
    const clickViewCartScenario = await clickViewCart()
    const buildShoppingCartScenario = await buildShoppingCart(checkout.bulkSubscriptionDuration)
    const buildContactInformationScenario = await buildContactInformation(checkout)
    const clickSubmitOrderScenario = await clickSubmitOrder()

    const scenarios = [   clickSubscriptionsAddToCartScenario
                        , clickViewCartScenario
                        , buildShoppingCartScenario
                        , buildContactInformationScenario
                        , clickSubmitOrderScenario ]

    // Steps:
    // 1. Add a Subscription to the cart via its row 'Add to Cart' button
    // 2. Click View Cart
    // 3. Build Cart Information
    // 4. Confirm Contact Information
    // 5. Click Submit Order
    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Checkout Subscription: ${checkout.subscription}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildSubscriptionCheckout
}