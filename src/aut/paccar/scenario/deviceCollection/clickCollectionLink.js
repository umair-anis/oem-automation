'use strict'

let { actions } = require('../../../../core/action/actions')
let { deviceCollectionUI } = require('../../repo/portalSideNavigation/deviceCollection/deviceCollectionUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickCollectionLink = async (name = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await deviceCollectionUI().tableFilter)
                            .setAction(await actions().enterFilterResult)
                            .setData([ name ])
                            .build())

    steps.push(await StepBuilder().setControl(await deviceCollectionUI().table)
                            .setAction(await actions().clickTableLink)
                            .setData(name)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Device Collection Link with Name: ${name}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickCollectionLink
}