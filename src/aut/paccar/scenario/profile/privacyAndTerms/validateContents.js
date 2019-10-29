//md-tab-content[1]//md-card-content

'use strict'

let { actions } = require('../../../../../core/action/actions')
let { buildElement } = require('../../../../../core/element/buildElement')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let validateContents = async (index = 0, text = []) => {

    let steps = []

    const contents = await buildElement(`contents`, `xpath`, `//md-tab-content[${index}]//md-card-content`)

    steps.push(await StepBuilder().setControl(contents)
                            .setAction(await actions().contains)
                            .setData([text])
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validate Privacy & Terms Contents with text: ${text}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateContents
}