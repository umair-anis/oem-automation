'use strict'

let { actions } = require('../../../../core/action/actions')
let { globalSearchUI } = require('../../repo/globalSearch/globalSearchUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickGeneralSearch = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await globalSearchUI().firstResult)
                                  .setAction(await actions().click)
                                  .build())

    const scenario = await ScenarioBuilder().setName(`Click First Dropdown Search Results - General Search`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickGeneralSearch
}