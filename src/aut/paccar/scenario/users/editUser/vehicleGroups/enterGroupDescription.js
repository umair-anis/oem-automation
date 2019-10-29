'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { usersUI } = require('../../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let enterGroupDescription = async (groupDescription = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().fieldGroupDescription)
                            .setAction(await actions().enter)
                            .setData(groupDescription)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Vehicle Group Description: ${groupDescription}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterGroupDescription
}