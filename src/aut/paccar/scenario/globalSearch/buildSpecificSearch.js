'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { enterGlobalSearch } = require('./enterGlobalSearch')
let { clickSearchOption } = require('./clickSearchOption')

/**
 * Build a scenario for typing a search for a 'search' term
 * @returns Scenario
 */
let buildSpecificSearch = async (search = {}) => {

    // Scenarios
    const enterGlobalSearchScenario = await enterGlobalSearch(search.text)
    const clickSearchOptionScenario = await clickSearchOption(search.searchIndex)

    const scenarios = [   enterGlobalSearchScenario
                        , clickSearchOptionScenario]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Enter a Search: ${search.text}, Click Specific Search`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildSpecificSearch
}