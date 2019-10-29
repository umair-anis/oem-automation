'use strict'

let { actions } = require('../../../../../core/action/actions')
let { usersUI } = require('../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

/**
 * The Active Status Checkbox is checked as default
 * The Email Not Verified Status Checkbox is unchecked by default
 */
let setStatus = async (statusActive = true, emailNotVerified = false) => {

    let steps = []

    // Uncheck the 'Active' checkbox
    steps.push(await StepBuilder().setControl(await usersUI().checkboxActive)
                            .setAction(await actions().click)
                            .build())

    // If we want to check 'Active' box then click it, otherwise leave it
    if(statusActive){
        steps.push(await StepBuilder().setControl(await usersUI().checkboxActive)
                            .setAction(await actions().click)
                            .build())
    }

    // If we want to check 'Email Not Verified' box then click it, otherwise leave it
    if(emailNotVerified){
        steps.push(await StepBuilder().setControl(await usersUI().checkboxEmailVerified)
                            .setAction(await actions().click)
                            .build())
    }

    const scenario = await ScenarioBuilder().setName(`Active Status: ${statusActive} Email Not Verified Status: ${emailNotVerified}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    setStatus
}