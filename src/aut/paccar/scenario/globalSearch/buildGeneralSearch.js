'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { enterGlobalSearch } = require('./enterGlobalSearch')
let { clickGeneralSearch } = require('./clickGeneralSearch')
let { validateSearchResults } = require('./validateSearchResults')

/**
 * Build a scenario for typing a search for a 'search' term
 * @returns Scenario
 */
let buildGeneralSearch = async (search = {}) => {

    // Scenarios
    const enterGlobalSearchScenario = await enterGlobalSearch(search.text)
    const clickGeneralSearchScenario = await clickGeneralSearch()
    const validateSearchResultsScenario = await validateSearchResults(search.searchResults)

    const scenarios = [   enterGlobalSearchScenario
                        , clickGeneralSearchScenario
                        , validateSearchResultsScenario ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Enter a Search, Click and Validate General Search List`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildGeneralSearch
}