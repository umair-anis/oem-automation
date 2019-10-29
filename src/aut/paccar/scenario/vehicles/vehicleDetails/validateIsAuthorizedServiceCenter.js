'use strict'

let { actions } = require('../../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let { buildElement } = require('../../../../../core/element/buildElement')

let validateIsAuthorizedServiceCenter = async (serviceCenter = {}) => {

    let steps = []

    // TODO check Approximate distance based on real generated distances
    const serviceCenterCard = buildElement(`serviceCenterCard`, `xpath`, `//a//div[contains(text(), "${serviceCenter.authorizedDealer}")]/../..//span[contains(text(), "${serviceCenter.phoneNumber}")]`)

    steps.push(await StepBuilder().setControl(await serviceCenterCard)
                            .setAction(await actions().isDisplayed)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validate Is Authorized Service Center: ${serviceCenter.authorizedDealer}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateIsAuthorizedServiceCenter
}