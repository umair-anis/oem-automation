'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { usersUI } = require('../../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let enterGroupName = async (groupName = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().fieldGroupName)
                            .setAction(await actions().enter)
                            .setData(groupName)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Vehicle Group Name: ${groupName}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterGroupName
}