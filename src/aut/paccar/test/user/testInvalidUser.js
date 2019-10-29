'use strict'

const { buildTestInvalidUser } = require('./buildTestInvalidUser')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { createAddress } = require('../../../../core/action/createAddress')
const { UserBuilder } = require('../../data/user/UserBuilder')

const testInvalidUser = async (env = {}, credential = '') => {

  // Invalid Password: needs to be at least 8 characters with a 
  const user = await UserBuilder().setEmail(await createAddress())
    .setFirstName(`Mike`)
    .setLastName(`Schmidt`)
    .setPhone(`123-456-7890`)
    .setExtension(`87`)
    .setOrganizationType(`OEM`)
    .setOrganizationName(`PACCAR`)
    .setUserRole(`Anju_Admin_PFM`)
    .setEditPreferences(false)
    .setPassword(`aaaa`)
    .setConfirmPassword(`aaaa`)
    .build()

  const test = await buildTestInvalidUser(env, credential, user)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testInvalidUser
}
