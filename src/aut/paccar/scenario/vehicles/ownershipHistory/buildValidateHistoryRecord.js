'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { clickOwnershipHistory } = require('./clickOwnershipHistory')
let { enterHistorySearch } = require('./enterHistorySearch')
let { validateHistoryRecord } = require('./validateHistoryRecord')

let buildValidateHistoryRecord = async (record = {}) => {

    // Scenarios
    const clickOwnershipHistoryScenario = await clickOwnershipHistory()
    const enterHistorySearchScenario = await enterHistorySearch(record.customer)
    const validateHistoryRecordScenario = await validateHistoryRecord(record)

    var scenarios = [ clickOwnershipHistoryScenario
                    , enterHistorySearchScenario
                    , validateHistoryRecordScenario ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Validate Histroy Record is displayed: ${record.customer}, ${record.purchaseDate}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildValidateHistoryRecord
}