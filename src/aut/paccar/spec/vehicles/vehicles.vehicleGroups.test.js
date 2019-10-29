'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testAddVehicleToCreatedGroup } = require('../../test/vehicle/testAddVehicleToCreatedGroup')
let { testAddVehicleToGroup } = require('../../test/vehicle/testAddVehicleToGroup')

describe(`Vehicles - Add Vehicle to Vehicle Group`, () => {

    const specAddNew = SpecBuilder().setPortal(`Paccar Portal`)
                                    .setPortalType(`Staging`)
                                    .setName(`Vehicles - Add Vehicle to Vehicle Group - Add A Vehicle To A New Vehicle Group`)
                                    .setTestFunc(testAddVehicleToCreatedGroup)
                                    .setPassingRoles( [`paccaradmin`] )
                                    .build()

    const specAddExisting = SpecBuilder().setPortal(`Paccar Portal`)
                                    .setPortalType(`Staging`)
                                    .setName(`Vehicles - Add Vehicle to Vehicle Group - Add A Vehicle To An Existing Vehicle Group`)
                                    .setTestFunc(testAddVehicleToGroup)
                                    .setPassingRoles( [`peoplenetadmin`] )
                                    .build()

    callSpecs(specAddNew)
    callSpecs(specAddExisting)
})