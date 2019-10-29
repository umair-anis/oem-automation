'use strict'

const { appendScenarios } = require('../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

const { clickConfigureColumns } = require('./clickConfigureColumns')
const { clickResetColumns } = require('./clickResetColumns')
const { clickSaveColumns } = require('./clickSaveColumns')
const { compareHeaders } = require('./compareHeaders')

const buildConfigureColumns_Reset = async (table = {}, header = []) => {
  // Scenarios
  const clickConfigureColumnsScenario = await clickConfigureColumns()
  const clickResetColumnsScenario = await clickResetColumns()
  const clickSaveColumnsScenario = await clickSaveColumns()
  const compareHeadersScenario = await compareHeaders(table, header)

  const scenarios = [clickConfigureColumnsScenario,
    clickResetColumnsScenario,
    clickSaveColumnsScenario,
    compareHeadersScenario]

  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName(`Testing Configure Columns Functionality - Reset`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildConfigureColumns_Reset
}
