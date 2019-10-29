'use strict'

let { actions } = require('../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')
let { buildElement } = require('../../../../core/element/buildElement')

let clickEditFactory = async (name = []) => {

    // Get the Edit Button that corresponds to the Factory Header
    const factoryEditPath = `//md-card//md-card-content//h2[1][contains(text(), "${name}")]/../../div/button[1]`
    const buttonFactoryEdit = await buildElement(`buttonFactoryEdit`, `xpath`, factoryEditPath)

    let steps = []

    steps.push(await StepBuilder().setControl(buttonFactoryEdit)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Edit Factory: ${name}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickEditFactory
}