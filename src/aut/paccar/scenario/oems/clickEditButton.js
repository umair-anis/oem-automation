'use strict'

let { actions } = require('../../../../core/action/actions')
let { oemsUI } = require('../../repo/portalSideNavigation/oems/oemsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickEditButton = async () => {

    let steps = []
    steps.push(await StepBuilder().setControl(await oemsUI().buttonEdit)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Edit Button`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickEditButton
}