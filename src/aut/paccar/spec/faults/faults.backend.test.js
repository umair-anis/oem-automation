'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testGetVehicleFault } = require('../../test/faults/testGetVehicleFault')

describe(`Faults - REST Back-End Operations`, () => {

    const specGet = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Faults - REST Back-End Operations - GET Request`)
                                            .setTestFunc(testGetVehicleFault)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .setRetryCount(1)
                                            .build()

    callSpecs(specGet)
})