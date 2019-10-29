'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickFilterType } = require('./clickFilterType')
let { enterFilters } = require('./enterFilters')

/**
 * @param {List[FilterBuilder]} filters 
 */
let buildEnterFilters = async (filters = [], ignoreFilterType = false) => {

    // Enter a list of filters with a certain filter type
    let scenarios = []
    for(const filter of filters){

        if(!ignoreFilterType){
            scenarios.push(await clickFilterType(filter.filterType))
        }

        scenarios.push(await enterFilters(filter.chipFilters))
    }

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Enter Filters`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildEnterFilters
}