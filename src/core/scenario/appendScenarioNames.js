'use strict'

/**
 * @description
 * @function appendScenarioNames
 * @param {*} scenarios
 * @returns {Names[]}
 * @example
 */
const appendScenarioNames = (scenarios = []) => {

  const names = []

  scenarios.forEach(scenario => {
    names.push(scenario.name)
  })

  return Object.freeze(names)
}

module.exports = {
  appendScenarioNames
}
