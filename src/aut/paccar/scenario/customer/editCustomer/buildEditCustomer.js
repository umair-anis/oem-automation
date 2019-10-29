'use strict'

let {appendScenarios} = require('../../../../../core/scenario/appendScenarios')
let {ScenarioBuilder} = require('../../../../../core/scenario/ScenarioBuilder')

let { searchCustomerTable } = require('../searchCustomerTable')
let { clickCustomerCheckBox } = require('../clickCustomerCheckBox')
let { clickSelectedEdit } = require('./clickSelectedEdit')
let { buildFillCustomerForm } = require('../addCustomer/buildFillCustomerForm')
let { clickSaveEditedCustomer } = require('./clickSaveEditedCustomer')

/**
 * Build a scenario for Edit Customer
 * @returns Scenario
 */
let buildEditCustomer = async (customer = {}) => {

    // Scenarios
    const searchCustomerTableScenario = await searchCustomerTable(customer.name)
    const clickCustomerCheckBoxScenario = await clickCustomerCheckBox(customer.name)
    const clickSelectedEditScenario = await clickSelectedEdit()
    const buildFillCustomerFormScenario = await buildFillCustomerForm(customer)
    const clickSaveEditedCustomerScenario = await clickSaveEditedCustomer()

    const scenarios = [ searchCustomerTableScenario                        
                      , clickCustomerCheckBoxScenario  
                      , clickSelectedEditScenario 
                      , buildFillCustomerFormScenario
                      , clickSaveEditedCustomerScenario ]


    let steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Edit a Customer: ${customer.name}`)
                                            .setSteps(steps)
                                            .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildEditCustomer
}