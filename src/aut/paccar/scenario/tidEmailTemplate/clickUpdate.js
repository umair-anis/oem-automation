'use strict'

let { actions } = require('../../../../core/action/actions')
let { tidEmailTemplatesUI } = require('../../repo/portalSideNavigation/tidEmailTemplates/tidEmailTemplatesUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickUpdate = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await tidEmailTemplatesUI().buttonUpdate)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Update TID Email Template`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickUpdate
}