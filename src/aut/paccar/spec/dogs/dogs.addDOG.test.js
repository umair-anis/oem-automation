'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testAddDOG } = require('../../test/dogs/testAddDOG')

describe(`Dealer Owner Group - Add DOG`, () => {

    const specAddDOG = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Dealer Owner Group - Add DOG`)
                                            .setTestFunc(testAddDOG)
                                            .setPassingRoles( [`paccaradmin`] )
                                            .build()

    callSpecs(specAddDOG)
})