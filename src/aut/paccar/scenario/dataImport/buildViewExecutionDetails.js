'use strict'

let { selectJobName } = require('./selectJobName')
let { clickRefresh } = require('./clickRefresh')
let { clickExecutionIDLink } = require('./clickExecutionIDLink')
let { verifyJobInfo } = require('./verifyJobInfo')

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let buildViewExecutionDetails = async (dataImport = {}) => {

    // Scenarios
    const selectJobNameScenario = await selectJobName(dataImport.jobName)
    const clickRefreshScenario = await clickRefresh()
    const clickExecutionIDLinkScenario = await clickExecutionIDLink(dataImport.executionID)
    const verifyJobInfoScenario = await verifyJobInfo(dataImport.info)

    const scenarios = [   selectJobNameScenario
                        , clickRefreshScenario
                        , clickExecutionIDLinkScenario
                        , verifyJobInfoScenario ]
                        
    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Confirm the Data Import Info present on Job: ${dataImport.jobName}, ID: ${dataImport.executionID}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildViewExecutionDetails
}