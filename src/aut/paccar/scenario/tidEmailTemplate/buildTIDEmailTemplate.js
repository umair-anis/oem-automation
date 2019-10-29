'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { selectLanguage } = require('./selectLanguage')
let { enterSubject } = require('./enterSubject')
let { enterFrom } = require('./enterFrom')
let { selectName } = require('./selectName')
let { enterContent } = require('./enterContent')
let { clickUpdate } = require('./clickUpdate')

let buildTIDEmailTemplate = async (template = {}) => {

    // Scenarios
    const selectLanguageScenario = await selectLanguage(template.language)
    const enterSubjectScenario = await enterSubject(template.subject)
    const enterFromScenario = await enterFrom(template.from)
    const selectNameScenario = await selectName(template.name)
    const enterContentScenario = await enterContent(template.content)
    const clickUpdateScenario = await clickUpdate()

    const scenarios = [   selectLanguageScenario
                        , enterSubjectScenario
                        , enterFromScenario
                        , selectNameScenario
                        , enterContentScenario
                        , clickUpdateScenario ]

    // Steps:
    // 1. Add a Subscription to the cart via its row 'Add to Cart' button
    // 2. Click View Cart
    // 3. Build Cart Information
    // 4. Confirm Contact Information
    // 5. Click Submit Order
    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Update TID Email Template in Language: ${template.language}, Subject: ${template.subject}, From: ${template.from}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildTIDEmailTemplate
}