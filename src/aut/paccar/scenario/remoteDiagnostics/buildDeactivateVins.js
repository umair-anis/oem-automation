'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickTabDeactivate } = require('./clickTabDeactivate')
let { enterDeactivateVins } = require('./deactivate/enterDeactivateVins')
let { selectRemovalCategory } = require('./deactivate/selectRemovalCategory')
let { clickDeactivate } = require('./deactivate/clickDeactivate')
let { validateFormErrors } = require('./validateFormErrors')
let { validateVinsProcessed } = require('./validateVinsProcessed')
let { searchIsRemoteDiag } = require('./searchIsRemoteDiag')

let buildDeactivateVins = async (vins = [], removalCategory = []) => {

    const errors = [`Enter up to 50 VINs.`]

    // Scenarios
    const clickTabDeactivateScenario = await clickTabDeactivate()
    const enterDeactivateVinsScenario = await enterDeactivateVins(vins)
    const selectRemovalCategoryScenario = await selectRemovalCategory(removalCategory)
    const validateFormErrorsScenario = await validateFormErrors(errors)
    const clickDeactivateScenario = await clickDeactivate()
    const validateVinsProcessedScenario = await validateVinsProcessed()
    const searchIsRemoteDiagScenario = await searchIsRemoteDiag(vins)
    
    const scenarios = [   clickTabDeactivateScenario 
                        , enterDeactivateVinsScenario
                        , selectRemovalCategoryScenario
                        , validateFormErrorsScenario
                        , clickDeactivateScenario
                        , validateVinsProcessedScenario
                        , searchIsRemoteDiagScenario  ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Deactivate Vins, Validate in Remote Diagnostics Table`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildDeactivateVins
}