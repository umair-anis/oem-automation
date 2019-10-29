'use strict'

const { appendScenarios } = require('../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

const { clickConfigureColumns } = require('./clickConfigureColumns')
const { buildClickArrows } = require('./buildClickArrows')
const { clickSaveColumns } = require('./clickSaveColumns')
const { compareHeaders } = require('./compareHeaders')

const buildConfigureColumns_Arrows = async (table = {}, orders = [], header = []) => {
  // Scenarios
  const clickConfigureColumnsScenario = await clickConfigureColumns()
  const buildClickArrowsScenario = await buildClickArrows(orders)
  const clickSaveColumnsScenario = await clickSaveColumns()
  const compareHeadersScenario = await compareHeaders(table, header)

  const scenarios = [clickConfigureColumnsScenario,
    buildClickArrowsScenario,
    clickSaveColumnsScenario,
    compareHeadersScenario]

  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName(`Testing Configure Columns Functionality - Mix-up Columns's Order`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildConfigureColumns_Arrows
}
