'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterHistorySearch = async (search = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().fieldHistorySearch)
                            .setAction(await actions().enter)
                            .setData(search)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Ownership History Search: ${search}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterHistorySearch
}