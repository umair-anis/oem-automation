'use strict'

let { actions } = require('../../../../core/action/actions')
let { filterUI } = require('../../repo/filters/filterUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let buildClearFilter = async () => {

    let steps = []
    steps.push(await StepBuilder().setControl(await filterUI().buttonClearFilters)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Clear Current Filters`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildClearFilter
}