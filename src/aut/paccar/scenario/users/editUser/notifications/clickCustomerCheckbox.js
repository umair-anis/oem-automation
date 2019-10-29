'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { usersUI } = require('../../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let clickCustomerCheckbox = async (customer = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().subscribedCustomersFilter)
                            .setAction(await actions().enterFilterResult)
                            .setData([ customer ])
                            .build())

    steps.push(await StepBuilder().setControl(await usersUI().subscribedCustomersTable)
                            .setAction(await actions().clickTableCheckbox)
                            .setData(customer)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Subscribed Customer: ${customer} checkbox`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickCustomerCheckbox
}