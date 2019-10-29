'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { clickTabPrivacy_USCanada } = require('./clickTabPrivacy_USCanada')
let { clickTabTerms_USCanada } = require('./clickTabTerms_USCanada')
let { clickTabPrivacy_Mexico } = require('./clickTabPrivacy_Mexico')
let { clickTabTerms_Mexico } = require('./clickTabTerms_Mexico')
let { validateContents } = require('./validateContents')

let buildValidatePrivacyTerms = async () => {

    // Scenarios
    const clickTabPrivacy_USCanadaScenario = await clickTabPrivacy_USCanada()
    const validateContents1 = await validateContents(1, [``])

    const clickTabTerms_USCanadaScenario = await clickTabTerms_USCanada()
    const validateContents2 = await validateContents(2, [``])

    const clickTabPrivacy_MexicoScenario = await clickTabPrivacy_Mexico()
    const validateContents3 = await validateContents(3, [``])

    const clickTabTerms_MexicoScenario = await clickTabTerms_Mexico()
    const validateContents4 = await validateContents(4, [``])
    
    const scenarios = [   clickTabPrivacy_USCanadaScenario 
                        , validateContents1
                        , clickTabTerms_USCanadaScenario
                        , validateContents2
                        , clickTabPrivacy_MexicoScenario
                        , validateContents3
                        , clickTabTerms_MexicoScenario
                        , validateContents4 ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Validate Privacy & Terms Content in each Tab`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildValidatePrivacyTerms
}