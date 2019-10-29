'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { enterCustomerName } = require('./enterCustomerName')
let { clickSaveCustomer } = require('./clickSaveCustomer')

let buildTransferOwnership = async (customerName = []) => {

    let steps = []
    
    const enterCustomerNameScenario = await enterCustomerName(customerName)
    const clickSaveCustomerScenario = await clickSaveCustomer()

    // Steps:
    // 1. Click Transfer Ownership
    // 2. Enter Customer Name
    // 4. Click Save
    const scenarios = [   enterCustomerNameScenario
                        , clickSaveCustomerScenario  ]

    steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Transfer Vehicle Ownership to: ${customerName}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    buildTransferOwnership
}