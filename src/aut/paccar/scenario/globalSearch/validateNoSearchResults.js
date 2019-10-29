'use strict'

let { actions } = require('../../../../core/action/actions')
let { globalSearchUI } = require('../../repo/globalSearch/globalSearchUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let validateNoSearchResults = async () => {

    let steps = []
    steps.push(await StepBuilder().setControl(await globalSearchUI().textNoSearchResultsFound)
                                  .setAction(await actions().isDisplayed)
                                  .build())

    const scenario = ScenarioBuilder().setName(`Confirm 'No Search Results Found' is displayed`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateNoSearchResults
}