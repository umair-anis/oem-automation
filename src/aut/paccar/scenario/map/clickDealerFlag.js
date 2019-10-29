'use strict'

let { buildElement } = require('../../../../core/element/buildElement')

let { actions } = require('../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickDealerFlag = async () => {

    let steps = []

    // Dealer Flags are consistently width = "25", nothing else
    const dealerFlag = await buildElement(`dealerFlag`, `xpath`, `//*[local-name()='image' and @width="25"]`)

    steps.push(await StepBuilder().setControl(dealerFlag)
                                  .setAction(await actions().click)
                                  .build())

    const scenario = await ScenarioBuilder().setName(`Click Dealer Flag`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickDealerFlag
}