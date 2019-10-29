'use strict'

const { buildTestIsRole } = require('./buildTestIsRole')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { RolesBuilder } = require('../../data/roles/RolesBuilder')

const testIsRole = async (env = {}, credential = '', data = {}) => {

  const role = await RolesBuilder().setName(data.role)
    .build()

  const test = await buildTestIsRole(env, credential, role)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testIsRole
}
