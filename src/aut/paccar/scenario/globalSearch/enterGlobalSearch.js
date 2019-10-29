'use strict'

let { actions } = require('../../../../core/action/actions')
let { globalSearchUI } = require('../../repo/globalSearch/globalSearchUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let enterGlobalSearch = async (search = []) => {

    let steps = []
    steps.push(StepBuilder().setControl(await globalSearchUI().globalSearchBar)
                            .setAction(await actions().isDisplayed)
                            .build())
    steps.push(StepBuilder().setControl(await globalSearchUI().globalSearchBar)
                            .setAction(await actions().enter)
                            .setData(search)
                            .build())

    const scenario = ScenarioBuilder().setName(`Enter a Global Search`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterGlobalSearch
}