'use strict'

let { actions } = require('../../../../core/action/actions')
let { customersUI } = require('../../repo/portalSideNavigation/customers/customersUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let searchCustomerTable = async (search = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await customersUI().tableFilter)
                                    .setAction(await actions().isDisplayed)
                                    .build())

    steps.push(await StepBuilder().setControl(await customersUI().tableFilter)
                                    .setAction(await actions().enterFilterResult)
                                    .setData([ search ])
                                    .build())

    // Wait for the table to load with the new filter
    steps.push(await StepBuilder().setControl(await customersUI().table)
                                    .setAction(await actions().isDisplayed)
                                    .build())

    const scenario = await ScenarioBuilder().setName(`Search Customer Table with search: ${search}`)
                                            .setSteps(steps)
                                            .build()

    return Object.freeze(scenario)
}

module.exports = {
    searchCustomerTable
}