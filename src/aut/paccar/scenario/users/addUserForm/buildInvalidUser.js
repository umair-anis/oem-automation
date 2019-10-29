'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { generateDefaultUser } = require('./generateDefaultUser')

let { clickAddUser } = require('../clickAddUser')
let { enterEmail } = require('./enterEmail')
let { enterFullname } = require('./enterFullname')
let { enterPhone } = require('./enterPhone')
let { enterOrganizationInformation } = require('./enterOrganizationInformation')
let { enterPasswords } = require('./enterPasswords')
let { clickSave } = require('./clickSave')

let { createAddress } = require('../../../../../core/action/createAddress')

let { alertInvalidEmailDisplayed } = require('./alertInvalidEmailDisplayed')
let { alertInvalidPasswordDisplayed } = require('./alertInvalidPasswordDisplayed')

/**
 * @description Test all of the invalid error messeges on the Add User Form. The Information does not need to
 *              be correct because the form will not submit
 * 
 *              Tests: Invalid email. Invalid Password
 * 
 * @param {UserBuilder} user 
 */
let buildInvalidUser = async (user = {}) => {

    // Scenarios
    const clickAddUserScenario = await clickAddUser()
    const enterEmailScenario = await enterEmail(user.email)
    const enterFullnameScenario = await enterFullname(user.firstName, user.lastName)
    const enterPhoneScenario = await enterPhone(user.phone, user.extension)
    const enterOrganizationInformationScenario = await enterOrganizationInformation(user.organizationType, user.organizationName, user.userRole)
    const enterPasswordsScenario = await enterPasswords(user.newPassword, user.confirmPassword)
    const clickSaveScenario = await clickSave()
    const alertInvalidPasswordDisplayedScenario = await alertInvalidPasswordDisplayed()

    const scenarios = [   clickAddUserScenario
                        , enterEmailScenario
                        , enterFullnameScenario
                        , enterPhoneScenario
                        , enterOrganizationInformationScenario
                        , enterPasswordsScenario
                        , clickSaveScenario
                        , alertInvalidPasswordDisplayedScenario ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Check Alerts for an invalid user email and password`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildInvalidUser
}