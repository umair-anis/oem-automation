'use strict'

let {actions} = require('../../../../core/action/actions')
let {customersUI} = require('../../repo/portalSideNavigation/customers/customersUI')
let {ScenarioBuilder} = require('../../../../core/scenario/ScenarioBuilder')
let {StepBuilder} = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for Click Customer CheckBox
 * @returns Scenario
 */
let clickCustomerCheckBox = async (data = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await customersUI().table)
                                    .setAction(await actions().clickTableCheckbox)
                                    .setData(data)
                                    .build())

    const scenario = await ScenarioBuilder().setName(`Click Customer CheckBox: ${data}`)
                                            .setSteps(steps)
                                            .build()

    return Object.freeze(scenario)
}

module.exports = {
    clickCustomerCheckBox
}