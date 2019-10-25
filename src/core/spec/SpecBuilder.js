/**
 * @name SpecBuilder
 * @author Avery Swank
 * 8/28/2019
 */
'use strict'

/**
 * @function SpecBuilder
 * @description Contains all of the test information to run a test across multiple data iterations and multiple accounts
 *
 * @var {string} portal                   Portal Name
 * @var {string} portalType               Type of Portal - Paccar Portal, PeopleNet Portal, etc.
 * @var {string} portalBrowser            Type of Browser - chrome, firefox, edge, etc.
 * @var {string} name                     Test Name
 * @var {TestBuilder} testFunc            Test Function
 * @var {Integer} timeout                 Time allowed for the test to run before returning a 'Timeout' error
 * @var {Integer} complexity              A score that determines the complexity of the test for test analysis
 * @var {Integer} retryCount              If a test comes back as 'fail', retry the same test a certain 'retryCount' of times
 * @var {List[string]} passingRoles       Login Credentials that return the test status as 'pass'
 * @var {List[string]} failingRoles       Login Credentials that return the test status as 'fail'
 * @var {Object} passingData              Test Data executing. Data could be JSON, a function, anything. Should return a 'pass' status
 * @var {Object} failingData              Test Data executing. Data could be JSON, a function, anything. Should return a 'fail' status
 * @var {boolean} useReporter             Report Steps, Data, Test Status to Reporter
 * @var {boolean} screenshotBetweenSteps  Take a Screenshot between each step for in-depth analysis
 */
const SpecBuilder = () => {
  const spec = {
    portal: '',
    portalType: '',
    portalBrowser: 'chrome',

    // Test Attributes to carry across all tests
    name: '',
    testFunc: {},
    timeout: 300000,
    complexity: 1,
    retryCount: 2,

    // Test Data
    passingRoles: [],
    failingRoles: [],
    passingData: [],
    failingData: [],

    useReporter: true,
    screenshotBetweenSteps: false
  }

  this.setPortal = (value = '') => {
    spec.portal = value
    return this
  }

  this.setPortalType = (value = '') => {
    spec.portalType = value
    return this
  }

  this.setPortalBrowser = (value = '') => {
    spec.portalBrowser = value
    return this
  }

  this.setName = (value = '') => {
    spec.name = value
    return this
  }

  this.setTestFunc = (value = {}) => {
    spec.testFunc = value
    return this
  }

  this.setTimeout = (value = 300000) => {
    spec.timeout = value
    return this
  }

  this.setComplexity = (value = 1) => {
    spec.complexity = value
    return this
  }

  this.setRetryCount = (value = 3) => {
    spec.retryCount = value
    return this
  }

  this.setPassingRoles = (value = []) => {
    spec.passingRoles = value
    return this
  }

  this.setFailingRoles = (value = []) => {
    spec.failingRoles = value
    return this
  }

  this.setPassingData = (value = []) => {
    spec.passingData = value
    return this
  }

  this.setFailingData = (value = []) => {
    spec.failingData = value
    return this
  }

  this.setUserReporter = (value = true) => {
    spec.useReporter = value
    return this
  }

  this.setScreenshotBetweenSteps = (value = false) => {
    spec.screenshotBetweenSteps = value
    return this
  }

  this.build = () => {
    return Object.freeze(spec)
  }

  return this
}

module.exports = {
  SpecBuilder
}
