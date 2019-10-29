'use strict'

const { buildTestEditUserProfile } = require('./buildTestEditUserProfile')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { UserBuilder } = require('../../data/user/UserBuilder')

const testEditUserProfile = async (env = {}, credential = '', data = {}) => {

  const user = await UserBuilder().setEmail(data.email)
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
    .setActive(data.active)
    .setEmailNotVerified(data.emailNotVerified)
    .build()

  const test = await buildTestEditUserProfile(env, credential, user)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testEditUserProfile
}
