'use strict'

let { buildElement } = require('../../../../core/element/buildElement')

let { actions } = require('../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickGroupOfDealers = async () => {

    let steps = []

    //*[local-name()='svg'][5]//*[local-name()='polygon'] where 5 is the index

    const dealersGroup = await buildElement(`dealersGroup`, `xpath`, `//*[local-name()='svg'][5]//*[local-name()='polygon']`)

    steps.push(await StepBuilder().setControl(dealersGroup)
                                  .setAction(await actions().click)
                                  .build())

    const scenario = await ScenarioBuilder().setName(`Click Dealer Group (square)`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickGroupOfDealers
}