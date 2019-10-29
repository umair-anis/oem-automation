'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testAddDeleteBlacklist } = require('../../test/blacklist/testAddDeleteBlacklist')
let { testAddInvalidDestination } = require('../../test/blacklist/testAddInvalidDestination')

describe('Blacklist - CRUD', () => {

    const specAddDelete = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Blacklist - Add, Delete a Blacklist Record`)
                                            .setTestFunc(testAddDeleteBlacklist)
                                            .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`] )
                                            .build()

    const specInvalidAddDelete = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Blacklist - Add Invalid Blacklist - Empty Destination`)
                                            .setTestFunc(testAddInvalidDestination)
                                            .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`] )
                                            .build()

    callSpecs(specAddDelete)
    callSpecs(specInvalidAddDelete)
})