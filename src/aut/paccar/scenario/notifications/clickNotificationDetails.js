'use strict'

let { actions } = require('../../../../core/action/actions')
let { buildElement } = require('../../../../core/element/buildElement')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickNotificationDetails = async (title = []) => {

    let steps = []

    // Click the first Notification Card with the same title - Click View Details
    const viewDetails = buildElement(`viewDetails`, `xpath`, `//md-card//h2[contains(text(), "${title}")]/../../../..//a`)

    steps.push(await StepBuilder().setControl(await viewDetails)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Notification Card View Details: ${title}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickNotificationDetails
}