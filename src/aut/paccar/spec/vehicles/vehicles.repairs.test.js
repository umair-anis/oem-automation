'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testSetIsRepairVehicle } = require('../../test/vehicle/testSetIsRepairVehicle')

describe(`Vehicles - Set In Repair`, () => {

    const specRepair = SpecBuilder().setPortal(`Paccar Portal`)
                                    .setPortalType(`Staging`)
                                    .setName(`Vehicles - Set In Repair - Validate Setting a Vehicle In-Repair, then Validate Setting Vehicle Out-Repair`)
                                    .setTestFunc(testSetIsRepairVehicle)
                                    .setPassingRoles( [`peoplenetadmin`] )
                                    .build()

    callSpecs(specRepair)

})