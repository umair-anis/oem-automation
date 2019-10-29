'use strict'

const { buildTestAddUser } = require('./buildTestAddUser')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { createAddress } = require('../../../../core/action/createAddress')
const { UserBuilder } = require('../../data/user/UserBuilder')

const testAddUser_DealerOwnerAdmin = async (env = {}, credential = '') => {

  const user = await UserBuilder().setEmail(await createAddress())
    .setFirstName(`Mike`)
    .setLastName(`Schmidt`)
    .setPhone(`123-456-7890`)
    .setExtension(`87`)
    .setOrganizationType(`Dealer Region`)
    .setOrganizationName(`EditNameRegion`)
    .setUserRole(`Dealer Region User`)
    .setEditPreferences(false)
    .setHideJoinAll(false)
    .setCollapseNavBar(false)
    .setMapCenter(`United States`)
    .setLanguage(`English`)
    .setMeasure(`US Customary`)
    .setDistance(`Miles`)
    .setVolumne(`Gallons`)
    .setFuelEconomy(`Miles Per Gallon`)
    .setTemperature(`Degrees Fahrenheit`)
    .setPressure(`Pounds Per Square Inch`)
    .setMass(`Pounds`)
    .setPassword(`myPassword1`)
    .setConfirmPassword(`myPassword1`)
    .setActive(true)
    .setEmailNotVerified(false)
    .build()

  const test = await buildTestAddUser(env, credential, user)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testAddUser_DealerOwnerAdmin
}
