'use strict'

let { actions } = require('../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickFirstPage = async () => {

    let steps = []
    steps.push(await StepBuilder().setIsCustomAction(true)
                                  .setAction(await actions().waitUntilPageLoaded)
                                  .build())
                                  
    steps.push(await StepBuilder().setIsCustomAction(true)
                                  .setAction(await actions().clickFirstPage)
                                  .build())

    const scenario = await ScenarioBuilder().setName(`Click Pagination First Page`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickFirstPage
}