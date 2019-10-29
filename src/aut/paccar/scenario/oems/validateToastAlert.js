'use strict'

let {actions} = require('../../../../core/action/actions')
let {alertsUI} = require('../../repo/alerts/alertsUI')
let {ScenarioBuilder} = require('../../../../core/scenario/ScenarioBuilder')
let {StepBuilder} = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for validate toast alert
 * @returns Scenario
 */
let validateToastAlert = async (data =[]) => {

    let steps = []
    steps.push(await StepBuilder().setControl(await alertsUI().toastAlert)
        .setAction(await actions().wait)
        .build())

    steps.push(await StepBuilder().setControl(await alertsUI().toastAlert)
        .setAction(await actions().contains)
        .setData([data])
        .build())

    steps.push(await StepBuilder().setControl(await alertsUI().toastAlert)
        .setAction(await actions().waitToDisappear)
        .build())

    const scenario = await ScenarioBuilder().setName('Validate toast alert')
        .setSteps(steps)
        .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateToastAlert
}