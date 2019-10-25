'use strict'

/**
 * @description
 * @function appendScenarios
 * @param {*} scenarios
 * @returns {Scenario[]}
 * @example
 */
const appendScenarios = (scenarios = []) => {
  const steps = []

  scenarios.forEach(scenario => {
    scenario.steps.forEach(step => {
      steps.push(step)
    })
  })

  return Object.freeze(steps)
}

module.exports = {
  appendScenarios
}
