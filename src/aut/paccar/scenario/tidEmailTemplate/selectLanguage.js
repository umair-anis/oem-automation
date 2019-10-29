'use strict'

let { actions } = require('../../../../core/action/actions')
let { tidEmailTemplatesUI } = require('../../repo/portalSideNavigation/tidEmailTemplates/tidEmailTemplatesUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let selectLanguage = async (language = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await tidEmailTemplatesUI().dropdownLanguage)
                            .setAction(await actions().select)
                            .setData(language)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Select Language: ${language}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    selectLanguage
}