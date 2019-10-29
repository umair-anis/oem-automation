'use strict'

let { actions } = require('../../../../core/action/actions')
let { tidEmailTemplatesUI } = require('../../repo/portalSideNavigation/tidEmailTemplates/tidEmailTemplatesUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let enterSubject = async (subject = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await tidEmailTemplatesUI().fieldSubject)
                            .setAction(await actions().enter)
                            .setData(subject)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Subject: ${subject}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterSubject
}