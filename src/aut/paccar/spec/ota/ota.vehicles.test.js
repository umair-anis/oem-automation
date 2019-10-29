'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testVehicleSoftware } = require('../../test/ota/testVehicleSoftware')

describe(`OTA - Vehicle Software`, () => {

    const specUpToDate = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`OTA - Vehicle Software - Software Has The Correct Update Status`)
                                            .setTestFunc(testVehicleSoftware)
                                            .setPassingRoles( [`otaTestAdmin`] )
                                            .build()

    callSpecs(specUpToDate)

})