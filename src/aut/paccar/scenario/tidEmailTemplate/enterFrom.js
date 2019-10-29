'use strict'

let { actions } = require('../../../../core/action/actions')
let { tidEmailTemplatesUI } = require('../../repo/portalSideNavigation/tidEmailTemplates/tidEmailTemplatesUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let enterFrom = async (from = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await tidEmailTemplatesUI().fieldFrom)
                            .setAction(await actions().enter)
                            .setData(from)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter From: ${from}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterFrom
}