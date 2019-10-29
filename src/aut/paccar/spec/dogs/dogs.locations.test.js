'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testLocationRestrictions } = require('../../test/dogs/testLocationRestrictions')
let { testDeleteRegionWithLocation } = require('../../test/dogs/testDeleteRegionWithLocation')

describe(`Dealer Owner Group - Locations/Regions Interactions`, () => {

    const specSameLoc = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Dealer Owner Group - Locations/Regions Interactions - Adding a Location to a Region, Verify that Same Location Is Not Available To Other Regions`)
                                            .setTestFunc(testLocationRestrictions)
                                            .setPassingRoles( [`paccaradmin`] )
                                            .build()

    const specDeleteRegion = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Dealer Owner Group - Locations/Regions Interactions - Deleting a Region With A Location Attached Will Throw An Error`)
                                            .setTestFunc(testDeleteRegionWithLocation)
                                            .setPassingRoles( [`paccaradmin`] )
                                            .build()

    callSpecs(specSameLoc)
    callSpecs(specDeleteRegion)

})