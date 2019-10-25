'use strict'

const { cloneDeep } = require('lodash')
const { isEmptyOrWhitespace } = require('../model/isEmptyOrWhitespace')
const { isNullOrUndefined } = require('../model/isNullOrUndefined')

/**
 * @description
 * @function ScenarioBuilder
 * @method setName
 * @method setSteps
 * @method build
 * @returns {Scenario}
 * @example
 */
const ScenarioBuilder = (() => {
  const scenario = {
    name: '',
    steps: []
  }

  this.setName = (value = '') => {
    scenario.name = value
    return this
  }

  this.setSteps = (value = []) => {
    scenario.steps = value
    return this
  }

  this.build = async () => {
    const isNameEmpty = isEmptyOrWhitespace(scenario.name)
    const isStepsNull = isNullOrUndefined(scenario.steps)
    const hasSteps = (scenario.steps.length > 0) ? true : false

    if (isNameEmpty) throw new Error(`Scenario name must be specified.`)
    if (isStepsNull || !hasSteps) throw new Error(`The scenario: ${scenario.name} has no steps.`)

    const copy = cloneDeep(scenario)
    return Object.freeze(copy)
  }

  return this
})

module.exports = {
  ScenarioBuilder
}
