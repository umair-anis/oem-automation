'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testEditPermission } = require('../../test/permissions/testEditPermission')
let { testAddDeletePermission } = require('../../test/permissions/testAddDeletePermission')

describe(`Permissions - CRUD Functionality`, () => {

    const specAddDelete = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Permissions - CRUD Functionality - Adding, then Deleting a Permission`)
                                            .setTestFunc(testAddDeletePermission)
                                            .setPassingRoles( [`otaTestAdmin`] )
                                            .build()

    const specEdit = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Permissions - CRUD Functionality - Editing a Permission`)
                                            .setTestFunc(testEditPermission)
                                            .setPassingRoles( [`otaTestAdmin`] )
                                            .build()

    callSpecs(specAddDelete)
    callSpecs(specEdit)
})