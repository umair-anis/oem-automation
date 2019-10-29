'use strict'

const { buildTestDeleteUser } = require('./buildTestDeleteUser')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { createAddress } = require('../../../../core/action/createAddress')
const { UserBuilder } = require('../../data/user/UserBuilder')

const testDeleteUser = async (env = {}, credential = '', data = {}) => {

  // If the test data email is empty, then use a real, generated email and assign back to the JSON for
  // future use for deletion
  var email = data.email
  if(email == ""){
    email = await createAddress()
  }

  const user = await UserBuilder().setEmail(email)
    .setFirstName(data.firstName)
    .setLastName(data.lastName)
    .setPhone(data.phone)
    .setExtension(data.extension)
    .setOrganizationType(data.organizationType)
    .setOrganizationName(data.organizationName)
    .setUserRole(data.userRole)
    .setEditPreferences(data.editPreferences)
    .setHideJoinAll(data.hideJoinAll)
    .setCollapseNavBar(data.collapseNavBar)
    .setMapCenter(data.mapCenter)
    .setLanguage(data.language)
    .setMeasure(data.unitsOfMeasure)
    .setDistance(data.unitsOfDistance)
    .setVolumne(data.unitsOfVolume)
    .setFuelEconomy(data.unitsOfFuelEconomy)
    .setTemperature(data.unitsOfTemperature)
    .setPressure(data.unitsOfPressure)
    .setMass(data.unitsOfMass)
    .setPassword(data.newPassword)
    .setConfirmPassword(data.confirmPassword)
    .setActive(data.active)
    .setEmailNotVerified(data.emailNotVerified)
    .build()

  const test = await buildTestDeleteUser(env, credential, user)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testDeleteUser
}