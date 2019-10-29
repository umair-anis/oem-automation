'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { buildEnterFilters } = require('./buildEnterFilters')
let { buildSaveFilters } = require('./buildSaveFilters')
let { buildClearFilter } = require('./buildClearFilter')
let { buildChangeFilterName } = require('./buildChangeFilterName')
let { buildDeleteFilter } = require('./buildDeleteFilter')

/**
 * @description Perform all Filter functionality for one filter
 * 
 * @param {FilterBuilder} filter 
 * @param {FilterBuilder} filterEdited 
 */
let buildFilterFunctionality = async (filter = {}, filterEdited = {}) => {

    // Add, Edit, Delete A filter
    const buildEnterFiltersScenario = await buildEnterFilters([filter], true)
    const buildSaveFiltersScenario = await buildSaveFilters(filter.name)
    const buildChangeFilterNameScenario = await buildChangeFilterName(filter.name, filterEdited.name)
    const buildDeleteFilterScenario = await buildDeleteFilter(filterEdited.name)
    const buildClearFilterScenario = await buildClearFilter()

    const scenarios = [   buildEnterFiltersScenario
                        , buildSaveFiltersScenario
                        , buildChangeFilterNameScenario
                        , buildDeleteFilterScenario
                        , buildClearFilterScenario ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Save a new Filter, Clear Current Filters, Change Filter's Name, then Delete it`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildFilterFunctionality
}