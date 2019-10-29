'use strict'

let { actions } = require('../../../../core/action/actions')
let { filterUI } = require('../../repo/filters/filterUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickFilterType = async (filterTypeName = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await filterUI().buttonFilterType)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setIsCustomAction(true)
                            .setAction(await actions().clickFilterType)
                            .setData(filterTypeName)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Filter Type: ${filterTypeName}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    clickFilterType
}