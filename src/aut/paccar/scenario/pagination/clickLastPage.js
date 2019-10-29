'use strict'

let { actions } = require('../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickLastPage = async () => {

    let steps = []
    steps.push(await StepBuilder().setIsCustomAction(true)
                                  .setAction(await actions().waitUntilPageLoaded)
                                  .build())

    steps.push(await StepBuilder().setIsCustomAction(true)
                                  .setAction(await actions().clickLastPage)
                                  .build())

    const scenario = await ScenarioBuilder().setName(`Click Pagination Last Page`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickLastPage
}