'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testAddCollection } = require('../../test/deviceCollections/testAddCollection')
let { testEditCollection } = require('../../test/deviceCollections/testEditCollection')
let { testDeleteCollection } = require('../../test/deviceCollections/testDeleteCollection')

describe('Device Collection - CRUD', () => {

    const specAddCol = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Device Collection - CRUD - Add Collection`)
                                            .setTestFunc(testAddCollection)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    const specEditCol = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Device Collection - CRUD - Edit Collection`)
                                            .setTestFunc(testEditCollection)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    const specDeleteCol = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Device Collection - CRUD - Delete Collection`)
                                            .setTestFunc(testDeleteCollection)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    callSpecs(specAddCol)
    callSpecs(specEditCol)
    callSpecs(specDeleteCol)
})