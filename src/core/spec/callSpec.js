/**
 * @name callSpec
 * @author Avery Swank
 * 8/23/2019
 */
'use strict'
const { readEnv } = require('../../aut/paccar/config/reader/readEnv')

/**
 * @function callSpec
 * @description Invoke a Jest spec
 *
 * @param {string} name
 * @param {string} credential        The credentials to login
 * @param {Object} data              Data Iteration to pass into the test
 * @param {Test} testFunc            The Test Function that is called
 * @param {string} expectedStatus    Expected pass/fail status. Default passing
 *
 * @example
 *
 *      it(`Pagination - Test Pagination Functionality`, async () => {
 *           const env = await readEnv()
 *           const result = await testPagination(env, 'paccaradmin', {})
 *           expect(result.status).toBe('pass')
 *      })
 */
const callSpec = async (name = '', credential = '', data = {}, testFunc = {}, timeout = 300000, retryCount = 3, expectedStatus = 'pass') => {
  it(name, async () => {
    var env = null
    var result = null

    // Retry the test 'retryCount' number of times or until the test matches our expected status
    for (var i = 1; i <= retryCount; i++) {
      env = await readEnv()
      result = await testFunc(env, credential, data)

      if ((await result.status) == expectedStatus) {
        break
      }
    }

    // TODO: When a test retries more than once, the test details, steps, and screenshots are duplicated under the same Allure test
    // Need to find a way to distinct the retry details apart

    expect(result.status).toBe(expectedStatus)
  }, timeout)
}

module.exports = {
  callSpec
}
