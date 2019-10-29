'use strict'

let { actions } = require('../../../../core/action/actions')
let { mapUI } = require('../../repo/map/mapUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickFrameTableLink = async (link = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await mapUI().frameTable)
                                  .setAction(await actions().clickTableLink)
                                  .setData(link)
                                  .build())

    const scenario = await ScenarioBuilder().setName(`Click Frame Table Link: ${link}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickFrameTableLink
}