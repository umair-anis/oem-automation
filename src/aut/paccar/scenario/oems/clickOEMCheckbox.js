'use strict'

let { actions } = require('../../../../core/action/actions')
let { oemsUI } = require('../../repo/portalSideNavigation/oems/oemsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickOEMCheckbox = async (name = []) => {

    let steps = []
    steps.push(await StepBuilder().setControl(await oemsUI().table)
                            .setAction(await actions().clickTableCheckbox)
                            .setData(name)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click OEM Checkbox: ${name}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickOEMCheckbox
}