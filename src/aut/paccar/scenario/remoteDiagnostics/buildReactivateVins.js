'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickTabReactivate } = require('./clickTabReactivate')
let { enterReactivateVins } = require('./reactivate/enterReactivateVins')
let { clickReactivate } = require('./reactivate/clickReactivate')
let { validateFormErrors } = require('./validateFormErrors')
let { validateVinsProcessed } = require('./validateVinsProcessed')
let { searchIsNotRemoteDiag } = require('./searchIsNotRemoteDiag')

let buildReactivateVins = async (vins = []) => {

    const errors = [`Enter up to 50 VINs.`]

    // Scenarios
    const clickTabReactivateScenario = await clickTabReactivate()
    const enterReactivateVinsScenario = await enterReactivateVins(vins)
    const clickReactivateScenario = await clickReactivate()
    const validateFormErrorsScenario = await validateFormErrors(errors)
    const validateVinsProcessedScenario = await validateVinsProcessed()
    const searchIsNotRemoteDiagScenario = await searchIsNotRemoteDiag(vins)
    
    const scenarios = [   clickTabReactivateScenario 
                        , enterReactivateVinsScenario
                        , clickReactivateScenario
                        , validateFormErrorsScenario
                        , validateVinsProcessedScenario
                        , searchIsNotRemoteDiagScenario  ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Reactivate Vins, Validate NOT in Remote Diagnostics Table`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildReactivateVins
}