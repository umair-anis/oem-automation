'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testVehicleDevices } = require('../../test/vehicle/testVehicleDevices')

describe(`Vehicles - Vehicle Devices`, () => {

    const specDevices = SpecBuilder().setPortal(`Paccar Portal`)
                                    .setPortalType(`Staging`)
                                    .setName(`Vehicles - Vehicle Devices - Validate Device Details is Displayed`)
                                    .setTestFunc(testVehicleDevices)
                                    .setPassingRoles( [`peoplenetadmin`] )
                                    .build()

    callSpecs(specDevices)
})