'use strict'

let { actions } = require('../../../../core/action/actions')
let { tidEmailTemplatesUI } = require('../../repo/portalSideNavigation/tidEmailTemplates/tidEmailTemplatesUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let selectName = async (name = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await tidEmailTemplatesUI().dropdownName)
                            .setAction(await actions().select)
                            .setData(name)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Select Name: ${name}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    selectName
}