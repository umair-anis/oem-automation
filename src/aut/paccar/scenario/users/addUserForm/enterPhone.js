'use strict'

let { actions } = require('../../../../../core/action/actions')
let { usersUI } = require('../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterPhone = async (phone = [], extension = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().fieldPhone)
                            .setAction(await actions().enter)
                            .setData(phone)
                            .build())

    steps.push(await StepBuilder().setControl(await usersUI().fieldExtension)
                            .setAction(await actions().enter)
                            .setData(extension)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Phone Information: ${phone} : ${extension}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterPhone
}