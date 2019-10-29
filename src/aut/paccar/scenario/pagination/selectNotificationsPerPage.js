'use strict'

let { actions } = require('../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let selectNotificationsPerPage = async (notPerPage = ``) => {

    let steps = []
    steps.push(await StepBuilder().setIsCustomAction(true)
                                  .setAction(await actions().waitUntilPageLoaded)
                                  .build())                    
    steps.push(await StepBuilder().setIsCustomAction(true)
                                  .setAction(await actions().clickNotificationDropdown)
                                  .build())
    steps.push(await StepBuilder().setIsCustomAction(true)
                                  .setAction(await actions().clickDropdownOption)
                                  .setData([notPerPage])
                                  .build())

    const scenario = await ScenarioBuilder().setName(`Select Notifications Per Page: ${notPerPage}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    selectNotificationsPerPage
}