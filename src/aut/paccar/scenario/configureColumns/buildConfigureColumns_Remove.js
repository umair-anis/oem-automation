'use strict'

const { appendScenarios } = require('../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

const { clickConfigureColumns } = require('./clickConfigureColumns')
const { clickCheckbox } = require('./clickCheckbox')
const { clickSaveColumns } = require('./clickSaveColumns')
const { compareHeaders } = require('./compareHeaders')

const buildConfigureColumns_Remove = async (table = {}, columnName = [], header = []) => {
  // Scenarios
  const clickConfigureColumnsScenario = await clickConfigureColumns()
  const clickCheckboxScenario = await clickCheckbox(columnName)
  const clickSaveColumnsScenario = await clickSaveColumns()
  const compareHeadersScenario = await compareHeaders(table, header)

  const scenarios = [clickConfigureColumnsScenario,
    clickCheckboxScenario,
    clickSaveColumnsScenario,
    compareHeadersScenario]

  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName(`Testing Configure Columns Functionality - Remove Column: ${columnName}`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildConfigureColumns_Remove
}
