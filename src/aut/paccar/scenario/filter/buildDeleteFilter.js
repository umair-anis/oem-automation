'use strict'

let { actions } = require('../../../../core/action/actions')
let { filterUI } = require('../../repo/filters/filterUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let { buildElement } = require('../../../../core/element/buildElement')

let buildDeleteFilter = async (name = []) => {

    let steps = []
    
    steps.push(await StepBuilder().setControl(await filterUI().buttonFiltersDropdown)
                            .setAction(await actions().isDisplayed)
                            .build())
    steps.push(await StepBuilder().setControl(await filterUI().buttonFiltersDropdown)
                            .setAction(await actions().click)
                            .build())
    steps.push(await StepBuilder().setControl(await filterUI().buttonManageSavedFilters)
                            .setAction(await actions().click)
                            .build())

    const buttonEditFilter = buildElement(`buttonEditFilter`, `xpath`, `//div/span[text() = "${name}"]/..//button[@ng-click="$ctrl.deleteFilter(filter)"]`)
    steps.push(await StepBuilder().setControl(await buttonEditFilter)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await filterUI().buttonSave)
                            .setAction(await actions().click)
                            .build())
                        
    const scenario = await ScenarioBuilder().setName(`Delete Filter: ${name}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildDeleteFilter
}