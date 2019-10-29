'use strict'

let { actions } = require('../../../../core/action/actions')
let { tidEmailTemplatesUI } = require('../../repo/portalSideNavigation/tidEmailTemplates/tidEmailTemplatesUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let enterContent = async (content = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await tidEmailTemplatesUI().fieldContent)
                            .setAction(await actions().enter)
                            .setData(content)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Content: ${content}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterContent
}