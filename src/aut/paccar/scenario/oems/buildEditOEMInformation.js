'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickOEMLink } = require('./clickOEMLink')
let { enterOEMInformation } = require('./enterOEMInformation')
let { clickSaveOEM } = require('./clickSaveOEM')

let buildEditOEMInformation = async (oem = {}) => {

    // Scenarios
    const clickOEMLinkScenario = await clickOEMLink(oem.name)
    const enterOEMInformationScenario = await enterOEMInformation(oem.name, oem.subscription, oem.warranty)
    const clickSaveOEMScenario = await clickSaveOEM()

    // Steps:
    // 1. Click Edit OEM by 'oem.name'
    // 2. Enter OEM Information
    // 3. Save OEM
    const steps = await appendScenarios([ clickOEMLinkScenario
                                        , enterOEMInformationScenario
                                        , clickSaveOEMScenario ])

    const scenario = await ScenarioBuilder().setName(`Edit OEM Information: ${oem.name}, ${oem.subscription}, ${oem.warranty}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildEditOEMInformation
}