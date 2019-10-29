'use strict'

let { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

let { enterFullname } = require('../../addUserForm/enterFullname')
let { enterPhone } = require('../../addUserForm/enterPhone')
let { enterOrganizationInformation } = require('../../addUserForm/enterOrganizationInformation')
let { setStatus } = require('../../addUserForm/setStatus')
let { clickSave } = require('../../addUserForm/clickSave')

/**
 * Build a scenario for Editing an existing user. This follows the same concept as addUserForm so it uses
 * all of the same pieces
 */
let buildEditProfile = async (user = {}) => {

    // Scenarios
    const enterFullnameScenario = await enterFullname(user.firstName, user.lastName)
    const enterPhoneScenario = await enterPhone(user.phone, user.extension)
    const enterOrganizationInformationScenario = await enterOrganizationInformation(user.organizationType, user.organizationName, user.userRole)
    const setStatusScenario = await setStatus(user.active, user.emailNotVerified)
    const clickSaveScenario = await clickSave()

    const scenarios = [   enterFullnameScenario
                        , enterPhoneScenario
                        , enterOrganizationInformationScenario
                        , setStatusScenario
                        , clickSaveScenario ]

    // Steps:
    // 1. Click Add User
    // 2. Fill out all of the form information
    // 3. Click Save
    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Edit a User: EVG AUTOMATION (DO NOT EDIT)`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildEditProfile
}