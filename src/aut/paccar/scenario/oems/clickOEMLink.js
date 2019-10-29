'use strict'

let { actions } = require('../../../../core/action/actions')
let { oemsUI } = require('../../repo/portalSideNavigation/oems/oemsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickOEMLink = async (name = []) => {

    let steps = []
    steps.push(await StepBuilder().setControl(await oemsUI().table)
                            .setAction(await actions().clickTableLink)
                            .setData(name)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click OEM Link: ${name}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickOEMLink
}