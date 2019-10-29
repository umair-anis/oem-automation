'use strict'

let { buildTestAddDeleteRole } = require('./buildTestAddDeleteRole')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { RolesBuilder } = require('../../data/roles/RolesBuilder')

let testAddDeleteRole = async (env = {}, credential = '', data = {}) => {

    const role = await RolesBuilder().setName(data.roleName)
        .setDescription(data.roleDescription)
        .setOrganizationTypes(data.organizationTypes)
        .setApplications(data.applications)
        .setPermissions(data.permissions)
        .build()

    const test = await buildTestAddDeleteRole(env, credential, role)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testAddDeleteRole
}