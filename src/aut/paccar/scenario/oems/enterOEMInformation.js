'use strict'

let { actions } = require('../../../../core/action/actions')
let { oemsUI } = require('../../repo/portalSideNavigation/oems/oemsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let enterOEMInformation = async (name = [], subscription = [], warranty = []) => {

    let steps = []
    steps.push(await StepBuilder().setControl(await oemsUI().fieldName)
                            .setAction(await actions().enter)
                            .setData(name)
                            .build())

    steps.push(await StepBuilder().setControl(await oemsUI().fieldSubscription)
                            .setAction(await actions().enter)
                            .setData(subscription)
                            .build())

    steps.push(await StepBuilder().setControl(await oemsUI().fieldWarrenty)
                            .setAction(await actions().enter)
                            .setData(warranty)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter OEM Name: ${name}, Subscription ${subscription}, Warranty: ${warranty}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterOEMInformation
}