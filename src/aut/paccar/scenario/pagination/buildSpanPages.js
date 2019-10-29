'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickFirstPage } = require('./clickFirstPage')
let { clickLastPage } = require('./clickLastPage')
let { clickNextPage } = require('./clickNextPage')
let { clickPreviousPage } = require('./clickPreviousPage')

let buildSpanPages = async () => {

    // Scenarios
    const clickLastPageScenario = await clickLastPage()
    const clickPreviousPageScenario = await clickPreviousPage()
    const clickFirstPageScenario = await clickFirstPage()
    const clickNextPageScenario = await clickNextPage()

    const scenarios = [   clickLastPageScenario
                        , clickPreviousPageScenario
                        , clickFirstPageScenario
                        , clickNextPageScenario ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Span Table Pages with all Pagination Page-Change Buttons`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildSpanPages
}