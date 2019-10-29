'use strict'

let { actions } = require('../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let selectPage = async (page = ``) => {

    let steps = []
    steps.push(await StepBuilder().setIsCustomAction(true)
                                  .setAction(await actions().waitUntilPageLoaded)
                                  .build())
                                  
    steps.push(await StepBuilder().setIsCustomAction(true)
                                  .setAction(await actions().clickPageDropdown)
                                  .build())
    steps.push(await StepBuilder().setIsCustomAction(true)
                                  .setAction(await actions().clickDropdownOption)
                                  .setData([page])
                                  .build())

    const scenario = await ScenarioBuilder().setName(`Select Page: ${page}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    selectPage
}