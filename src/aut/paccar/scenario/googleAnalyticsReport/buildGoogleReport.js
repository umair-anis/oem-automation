'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { selectUserRole } = require('./selectUserRole')
let { enterStartDate } = require('./enterStartDate')
let { enterEndDate } = require('./enterEndDate')
let { clickExport } = require('./clickExport')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

/**
 * Build a scenario for selecting a role and exporting a report from start date to end date
 * @returns Scenario
 */
let buildGoogleReport = async (report = {}) => {

    // Scenarios
    const selectUserRoleScenario = await selectUserRole(report.userRole)
    const enterStartDateScenario = await enterStartDate(report.startDate)
    const enterEndDateScenario = await enterEndDate(report.endDate)
    const clickExportScenario = await clickExport()

    // Steps:
    // 1. Set a role
    // 2. Enter a Start Date
    // 3. Enter a End Date
    // 4. Click Export
    const steps = await appendScenarios([ selectUserRoleScenario
                                        , enterStartDateScenario
                                        , enterEndDateScenario
                                        , clickExportScenario ])

    const scenario = await ScenarioBuilder().setName('Set a Role, Enter a Start Date, Enter a End Date, Click Export')
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildGoogleReport
}