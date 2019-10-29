'use strict'

let { actions } = require('../../../../core/action/actions')
let { oemsUI } = require('../../repo/portalSideNavigation/oems/oemsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let enterOEMFilter = async (filter = []) => {

    let steps = []
    steps.push(await StepBuilder().setControl(await oemsUI().tableFilter)
                            .setAction(await actions().enterFilterResult)
                            .setData([ filter ])
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter OEM Filter: ${filter}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterOEMFilter
}