'use strict'

let { actions } = require('../../../../../core/action/actions')
let { usersUI } = require('../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterOrganizationInformation = async (organization = [], organizationName = [], userRole = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().dropdownOrganizationType)
                                  .setAction(await actions().select)
                                  .setData(organization)
                                  .build())

    if(organizationName.length > 2){
        steps.push(await StepBuilder().setControl(await usersUI().fieldOrganizationName)
                                      .setAction(await actions().enter)
                                      .setData(organizationName)
                                      .build())
    }

    steps.push(await StepBuilder().setControl(await usersUI().fieldUserRole)
                                  .setAction(await actions().isDisplayed)
                                  .build())

    if(userRole.length != 0){
    steps.push(await StepBuilder().setControl(await usersUI().fieldUserRole)
                                  .setAction(await actions().enter)
                                  .setData(userRole)
                                  .build())
    }

    const scenario = await ScenarioBuilder().setName(`Enter Organization Information: ${organization} ${organizationName} ${userRole}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterOrganizationInformation
}