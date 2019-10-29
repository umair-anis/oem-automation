'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testGetVehicleFault } = require('../../test/faults/testGetVehicleFault')

describe(`Vehicles - Faults`, () => {

    const specVehicleFault = SpecBuilder().setPortal(`Paccar Portal`)
                                    .setPortalType(`Staging`)
                                    .setName(`Vehicles - Faults - Get Vehicle Fault`)
                                    .setTestFunc(testGetVehicleFault)
                                    .setPassingRoles( [`otaTestAdmin`] )
                                    .build()

    callSpecs(specVehicleFault)
})