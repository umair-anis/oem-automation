'use strict'

const { cloneDeep } = require('lodash')
const { isEmptyOrWhitespace } = require('../model/isEmptyOrWhitespace')
const { isNullOrUndefined } = require('../model/isNullOrUndefined')

/**
 * @description Builds a single instance of a 'test' data type, with all the necessary properties
 * for defining what a 'test' is. Uses a 'Revealing Module Pattern' and function chaining to
 * streamline the syntax for building the test.
 * @function TestBuilder
 * @method setName Sets the name of the test.
 * @method setBrowsers Sets the browsers to be used during a test's execution.
 * @method setLog Sets to logger to be used throughout the test's execution.
 * @method setScenarios Sets an array of scenarios that make up a test.
 * @method setEnvironment Sets the environment where the test will execute.
 * @method build Builds and validates the instance of 'test' defined by the setters.
 * @returns {Test} Returns an immutable instance of a 'test'.
 * @example
 *
 * //Name, log, and environment are the only required fields.
 * const test = await TestBuilder().setName('My Test Name Here')
 *                                 .setBrowsers([ 'chrome', 'edge', 'firefox' ])
 *                                 .setEnvironment('qa')
 *                                 .setLog(multiLogger)
 *                                 .setScenarios([ validaLoginScenario, searchCustomerScenario, validateCustomerSearchScenario ])
 *                                 .build()
 */
const TestBuilder = () => {
  const test = {
    name: '',
    browsers: [],
    log: null,
    scenarios: [],
    environment: null,
    manualTestIds: [],
    expectedStatus: 'pass'
  }

  this.setName = (value = '') => {
    test.name = value
    return this
  }

  this.setBrowsers = (value = []) => {
    test.browsers = value
    return this
  }

  this.setLog = (value = {}) => {
    test.log = value
    return this
  }

  this.setScenarios = (value = []) => {
    test.scenarios = value
    return this
  }

  this.setEnvironment = (value = {}) => {
    test.environment = value
    return this
  }

  this.setManualTestIds = (value = []) => {
    this.manualTestIds = value
    return this
  }

  this.setExpectedStatus = (value = 'pass') => {
    this.expectedStatus = value
    return this
  }

  this.build = async () => {
    const copy = await cloneDeep(test)

    // has ui steps but no browsers specified

    const isEmptyName = isEmptyOrWhitespace(test.name)
    if (isEmptyName) throw new Error(`Test name cannot be empty or whitespace.`)

    const isLogNull = isNullOrUndefined(test.log)
    if (isLogNull) throw new Error(`Must specify a logger for a test.`)

    const isEnvNull = isNullOrUndefined(test.environment)
    if (isEnvNull) throw new Error(`Environment must be set for a test to execute.`)

    if (test.scenarios.length === 0) throw new Error(`At least 1 scenario must be specified when defining a test.`)

    return Object.freeze(copy)
  }

  return this
}

module.exports = {
  TestBuilder
}
