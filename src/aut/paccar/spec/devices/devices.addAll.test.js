'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testAddAllNewCollection } = require('../../test/devices/testAddAllNewCollection')
let { testAddAllExistingCollection } = require('../../test/devices/testAddAllExistingCollection')

describe(`Devices - Add All Functionality`, () => {

    const specAddAllNew = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Devices - Add All Functionality - Add All To New Collection`)
                                            .setTestFunc(testAddAllNewCollection)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    const specAddAllExisting = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Devices - Add All Functionality - Add All To Existing Collection`)
                                            .setTestFunc(testAddAllExistingCollection)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    callSpecs(specAddAllNew)
    callSpecs(specAddAllExisting)
})