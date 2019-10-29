'use strict'

let { actions } = require('../../../../core/action/actions')
let { usersUI } = require('../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickUserCheckBox = async (search = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().tableFilter)
                            .setAction(await actions().isDisplayed)
                            .build())

    steps.push(await StepBuilder().setControl(await usersUI().tableFilter)
                            .setAction(await actions().enterFilterResult)
                            .setData([ search ])
                            .build())

    steps.push(await StepBuilder().setControl(await usersUI().table)
                            .setAction(await actions().clickTableCheckbox)
                            .setStaticWait(2000)
                            .setData(search)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Checkbox with search term: ${search}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickUserCheckBox
}