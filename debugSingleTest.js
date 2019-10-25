'use strict'

const chromedriver = require('./node_modules/chromedriver')
const { cloneDeep } = require('lodash')
const { readEnv } = require('./src/aut/paccar/config/reader/readEnv')
const { testAddDeleteCustomer } = require('./src/aut/paccar/test/customer/testAddDeleteCustomer')

const debugSingleTest = (async () => {
  // Environment setup
  const env = await readEnv()
  const envCopy = cloneDeep(env)
  envCopy.isRemote = false

  const testData = {
    name: 'Select All Roles Report',

    userRole: 'paccaradmin',
    startDate: '2019-07-24',
    endDate: '2019-08-23'
  }

  // Run Test
  const result = await testAddDeleteCustomer(envCopy, 'paccaradmin')

  console.log(`Debugging complete! Status is: ${result.status}.`)
})()

Promise.all([debugSingleTest])
