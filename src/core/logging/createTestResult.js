'use strict'

/**
 * @description
 * @function createTestResult
 * @param {*} test
 * @param {*} reporterConfig
 * @async
 * @returns {TestResult}
 * @example

 */
const createTestResult = async (test = {}, reporterConfig = {}) => {
  // Needs to have a timeout and check for a database connection.
  // If it can't reach the database then it must write to the console.
  // Must report that it could not reach the test results database within the 
  // given timeout.
  // All subsequent results will check the 'hasDb' flag and will not try to reconnect
  // if the connection is down.
  // It does the connection by attempting to write the database result for 10 seconds.

  // let currentTestResult = Write new test result.
  // write browser count
  // browser names
  // data iteration count
  // scenario count
  // scenario sequence
  // start time
  // test name

  // returns the test result

  /*
  Need a test result table
  Need a scenario result table
  Need a step result table
  */
}

module.exports = {
  createTestResult
}
