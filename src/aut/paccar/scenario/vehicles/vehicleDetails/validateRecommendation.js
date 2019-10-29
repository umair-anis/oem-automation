'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let { buildElement } = require('../../../../../core/element/buildElement')

let validateRecommendation = async (recommendation = []) => {

    let steps = []

    const textRecommendation = buildElement(`textRecommendation`, `xpath`, `//span[contains(text(), "${recommendation}")]`)

    steps.push(await StepBuilder().setControl(await textRecommendation)
                            .setAction(await actions().isDisplayed)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validate Vehicle Recommendation: ${recommendation}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateRecommendation
}