'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testAddDOGLocation } = require('../../test/dogs/testAddDOGLocation')
let { testAddDOGRegion } = require('../../test/dogs/testAddDOGRegion')
let { testEditDOGInfo } = require('../../test/dogs/testEditDOGInfo')
let { testEditDOGRegion } = require('../../test/dogs/testEditDOGRegion')

describe(`Dealer Owner Group - Edit DOG`, () => {
    
    const specEditInfo = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Dealer Owner Group - Edit DOG - Information`)
                                            .setTestFunc(testEditDOGInfo)
                                            .setPassingRoles( [`paccaradmin`] )
                                            .build()

    const specEditLoc = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Dealer Owner Group - Edit DOG - Add Location`)
                                            .setTestFunc(testAddDOGLocation)
                                            .setPassingRoles( [`paccaradmin`] )
                                            .build()

    const specAddRegion = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Dealer Owner Group - Edit DOG - Add Region`)
                                            .setTestFunc(testAddDOGRegion)
                                            .setPassingRoles( [`paccaradmin`] )
                                            .build()

    const specEditRegion = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Dealer Owner Group - Edit DOG - Edit Region`)
                                            .setTestFunc(testEditDOGRegion)
                                            .setPassingRoles( [`paccaradmin`] )
                                            .build()

    callSpecs(specEditInfo)
    callSpecs(specEditLoc)
    callSpecs(specAddRegion)
    callSpecs(specEditRegion)
})