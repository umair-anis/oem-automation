'use strict'

let { selectEntity } = require('./selectEntity')
let { clickExport } = require('./clickExport')

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let buildExportEntity = async (entity = []) => {

    // Scenarios
    const selectEntityScenario = await selectEntity(entity)
    const clickExportScenario = await clickExport()

    // Steps:
    // 1. Select Job
    // 2. Click Exection ID to look at
    // 3. Verify information is present
    const steps = await appendScenarios([ selectEntityScenario
                                        , clickExportScenario ])

    const scenario = await ScenarioBuilder().setName(`Export Entity: ${entity}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildExportEntity
}