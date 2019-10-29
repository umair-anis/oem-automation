'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { enterName } = require('./enterName')
let { enterEmail } = require('./enterEmail')
let { enterPhone } = require('./enterPhone')
let { validateContactFormErrors } = require('./validateContactFormErrors')
let { clickSaveAndContinue } = require('./clickSaveAndContinue')

let buildContactInformation = async (checkout) => {

    const contactFormErrors = [`First name is required`, `Last name is required`, `Email is required`, `Phone is required`, `The E-Mail address is not valid`, `Phone number must consist of 10 numbers`]

    // Scenarios
    const enterNameScenario = await enterName(checkout.firstName, checkout.lastName)
    const enterEmailScenario = await enterEmail(checkout.email)
    const enterPhoneScenario = await enterPhone(checkout.phone, checkout.extension)
    const validateContactFormErrorsScenario = await validateContactFormErrors(contactFormErrors)
    const clickSaveAndContinueScenario = await clickSaveAndContinue()

    const scenarios = [   enterNameScenario
                        , enterEmailScenario
                        , enterPhoneScenario
                        , validateContactFormErrorsScenario
                        , clickSaveAndContinueScenario ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Enter 'Confirm Contact Information' for: ${checkout.firstName} ${checkout.lastName}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildContactInformation
}