'use strict'

let { actions } = require('../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickPreviousPage = async () => {

    let steps = []
    steps.push(await StepBuilder().setIsCustomAction(true)
                                  .setAction(await actions().waitUntilPageLoaded)
                                  .build())
                                  
    steps.push(await StepBuilder().setIsCustomAction(true)
                                  .setAction(await actions().clickPreviousPage)
                                  .build())

    const scenario = await ScenarioBuilder().setName(`Click Pagination Previous Page`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickPreviousPage
}