'use strict'

let { actions } = require('../../../../../core/action/actions')
let { devicesUI } = require('../../../repo/portalSideNavigation/devices/devicesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let buildAddNote = async (title = [], message = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await devicesUI().buttonAddNote)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await devicesUI().fieldNoteTitle)
                            .setAction(await actions().enter)
                            .setData(title)
                            .build())

    steps.push(await StepBuilder().setControl(await devicesUI().fieldNoteMessage)
                            .setAction(await actions().enter)
                            .setData(message)
                            .build())

    steps.push(await StepBuilder().setControl(await devicesUI().buttonSaveNote)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Add Note: ${title}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    buildAddNote
}