'use strict'

const { appendScenarios } = require('../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

const { clickArrowUp } = require('./clickArrowUp')
const { clickArrowDown } = require('./clickArrowDown')

/**
 * @description For as many orders as they come in, click either the up or down arrow associated
 *              with that column name.
 *
 * @param {OrderBuilder} orders
 */
const buildClickArrows = async (orders = []) => {
  var scenarios = []

  for (const order of orders) {
    // Count: How many times do you want to click that arrow
    for (var i = 1; i <= order.count; i++) {
      if (order.arrowUp) {
        scenarios.push(await clickArrowUp(order.columnName))
      } else {
        scenarios.push(await clickArrowDown(order.columnName))
      }
    }
  }

  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName(`Configure Columns Functionality - Clicking Arrows`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildClickArrows
}
