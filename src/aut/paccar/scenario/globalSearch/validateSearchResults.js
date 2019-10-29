'use strict'

let { actions } = require('../../../../core/action/actions')
let { globalSearchUI } = require('../../repo/globalSearch/globalSearchUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let validateSearchResults = async (searchResults = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await globalSearchUI().entriesSearchResults)
                                  .setAction(await actions().isDisplayed)
                                  .build())

    const scenario = ScenarioBuilder().setName('Confirm Search Results are Displayed')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateSearchResults
}