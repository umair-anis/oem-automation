/**
 * @name callSpecs
 * @author Avery Swank
 * 8/23/2019
 */

'use strict'

const { callSpec } = require('./callSpec')

/**
 * @function callSpecs
 * @description Invoke multiple specs
 *
 * @param {string} name         Name of the test
 * @param {Data Reader} data    Data to run against "testFunc"
 * @param {Test} testFunc       The Test Function called on all of the same test data in "data"
 */
const callSpecs = async (specs = {}) => {
  /**
     * Name Format:
     *  - Portal Name
     *  - Portal Type
     *  - Login Credentials
     *  - Test Name
     *
     * @example
     *    'Paccar Portal - Dev - Peoplenet Admin - Diagnostic Assistant - Open New Tab to Assistance Portal'
     *    'Paccar Portal - Staging - Paccar Admin - Users - Add User'
     *    'PAccar Portal - QA - Customer Admin - Cannot View Vehicles They Do Not Own'
     */
  // If there is no data being passed into the SpecBuilder, then run the tests without data

  let testName = ''

  if (JSON.stringify(specs.passingData).toString() == '[]' && JSON.stringify(specs.failingData).toString() == '[]') {
    for (const passingRole of specs.passingRoles) {
      testName = `${specs.portal} - ${specs.portalType} - ${specs.name} - Positive Role: ${passingRole} - Data: None`
      callSpec(testName, passingRole, {}, specs.testFunc, specs.timeout, specs.retryCount, 'pass')
    }

    for (const failingRole of specs.failingRoles) {
      testName = `${specs.portal} - ${specs.portalType} - ${specs.name} - Negative Role: ${failingRole} - Data: None`
      callSpec(testName, failingRole, {}, specs.testFunc, specs.timeout, specs.retryCount, 'fail')
    }
  }

  // Otherwise, run through the tests per role per data iteration

  for (const passingRole of specs.passingRoles) {
    for (const dataIteration of specs.passingData) {
      testName = `${specs.portal} - ${specs.portalType} - ${specs.name} - Positive Role: ${passingRole} - Positive Data: ${dataIteration.name}`
      callSpec(testName, passingRole, dataIteration, specs.testFunc, specs.timeout, specs.retryCount, 'pass')
    }

    for (const dataIteration of specs.failingData) {
      testName = `${specs.portal} - ${specs.portalType} - ${specs.name} - Positive Role: ${passingRole} - Negative Data: ${dataIteration.name}`
      callSpec(testName, passingRole, dataIteration, specs.testFunc, specs.timeout, specs.retryCount, 'fail')
    }
  }

  for (const failingRole of specs.failingRoles) {
    for (const dataIteration of specs.passingData) {
      testName = `${specs.portal} - ${specs.portalType} - ${specs.name} - Negative Role: ${failingRole} - Positive Data: ${dataIteration.name}`
      callSpec(testName, failingRole, dataIteration, specs.testFunc, specs.timeout, specs.retryCount, 'fail')
    }

    for (const dataIteration of specs.failingData) {
      testName = `${specs.portal} - ${specs.portalType} - ${specs.name} - Negative Role: ${failingRole} - Negative Data: ${dataIteration.name}`
      callSpec(testName, failingRole, dataIteration, specs.testFunc, specs.timeout, specs.retryCount, 'fail')
    }
  }
}

module.exports = {
  callSpecs
}
