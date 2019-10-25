'use strict'

/**
 * @description
 * @function calculateIterations
 * @param {*} scenarios
 * @async
 * @returns {number}
 * @example
 */
const calculateIterations = async (scenarios = []) => {
  let iterations = 0

  for (const scenario of scenarios) {
    for (const step of scenario.steps) {
      iterations = (step.data.length > iterations) ? step.data.length : iterations
    }
  }

  return Object.freeze(iterations)
}

module.exports = {
  calculateIterations
}
