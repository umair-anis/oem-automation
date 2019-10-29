'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { clickAddUser } = require('../clickAddUser')
let { enterEmail } = require('./enterEmail')
let { enterFullname } = require('./enterFullname')
let { enterPhone } = require('./enterPhone')
let { enterOrganizationInformation } = require('./enterOrganizationInformation')
let { enterPreferencesInformation } = require('./enterPreferencesInformation')
let { enterPasswords } = require('./enterPasswords')
let { setStatus } = require('./setStatus')
let { validateFormErrors } = require('../../googleAnalyticsReport/validateFormErrors')
let { clickSave } = require('./clickSave')

/**
 * Build a scenario for Adding a User
 */
let buildAddUser = async (user = {}) => {

    const userFormErrors = [`Email is required.`, `First name is required.`, `Last name is required.`, `Phone number required.`, `User Role is required.`,
                            `Phone number must consist of 10 numbers.`, `That is not a valid email. Please input a valid email.`, `Password and Confirm Password fields are not equal.`]

    // Scenarios
    const clickAddUserScenario = await clickAddUser()
    const enterEmailScenario = await enterEmail(user.email)
    const enterFullnameScenario = await enterFullname(user.firstName, user.lastName)
    const enterPhoneScenario = await enterPhone(user.phone, user.extension)
    const enterOrganizationInformationScenario = await enterOrganizationInformation(user.organizationType, user.organizationName, user.userRole)
    const enterPreferencesScenario = await enterPreferencesInformation(user.preferences)
    const enterPasswordsScenario = await enterPasswords(user.newPassword, user.confirmPassword)
    const setStatusScenario = await setStatus(user.active, user.emailNotVerified)
    const validateFormErrorsScenario = await validateFormErrors(userFormErrors)
    const clickSaveScenario = await clickSave()

    // All of this information is required
    var scenarios = [ clickAddUserScenario
                    , enterEmailScenario
                    , enterFullnameScenario
                    , enterOrganizationInformationScenario
                    , enterPhoneScenario]

    // Preferences are not required
    if(user.editPreferences)
        scenarios.push(enterPreferencesScenario)

    // A Password is not required
    if(user.newPassword != '')
        scenarios.push(enterPasswordsScenario)

    // Setting status is required
    scenarios.push(setStatusScenario)
    scenarios.push(validateFormErrorsScenario)
    scenarios.push(clickSaveScenario)

    // Steps:
    // 1. Click Add User
    // 2. Fill out all of the form information
    // 3. Click Save
    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Add a New User: ${user.firstName} ${user.lastName}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildAddUser
}