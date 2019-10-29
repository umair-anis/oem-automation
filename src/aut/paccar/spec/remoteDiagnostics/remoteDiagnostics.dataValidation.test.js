'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testVehicleDiagDisabled } = require('../../test/remoteDiagnostics/testVehicleDiagDisabled')

describe(`Remote Diagnostics - Vehicle Data`, () => {

    const specVehicleData = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Remote Diagnostics - Vehicle Data - Deactivated Vehicle's Recommendation Matches "Remote Diagnostics Disabled"`)
                                            .setTestFunc(testVehicleDiagDisabled)
                                            .setPassingRoles( [`paccaradmin`] )
                                            .build()

    callSpecs(specVehicleData)
})