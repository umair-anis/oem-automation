'use strict'

let { actions } = require('../../../../core/action/actions')
let { filterUI } = require('../../repo/filters/filterUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let buildSaveFilters = async (filterName = []) => {

    let steps = []

    // Save the filters as "filterName"
    steps.push(await StepBuilder().setControl(await filterUI().buttonFiltersDropdown)
                            .setAction(await actions().click)
                            .build())
    steps.push(await StepBuilder().setControl(await filterUI().buttonSaveFilter)
                            .setAction(await actions().click)
                            .build())
    steps.push(await StepBuilder().setControl(await filterUI().fieldFilterName)
                            .setAction(await actions().enter)
                            .setData(filterName)
                            .build())
    steps.push(await StepBuilder().setControl(await filterUI().buttonSave)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Save Filters as Name: ${filterName}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildSaveFilters
}