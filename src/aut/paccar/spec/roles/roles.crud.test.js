'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testAddDeleteRole } = require('../../test/roles/testAddDeleteRole')

describe(`Roles - CRUD`, () => {

    const specCrudRole = SpecBuilder().setPortal(`Paccar Portal`)
                                        .setPortalType(`Staging`)
                                        .setName(`Roles - CRUD - Add, then Delete, a Role`)
                                        .setTestFunc(testAddDeleteRole)
                                        .setPassingRoles( [`otaTestAdmin`] )
                                        .setPassingData( Object.freeze(require('../../testData/roles/addRole/passData.json')).data )
                                        .build()

    callSpecs(specCrudRole)
})