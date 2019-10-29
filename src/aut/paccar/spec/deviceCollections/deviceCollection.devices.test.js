'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testViewDeviceDetails } = require('../../test/deviceCollections/testViewDeviceDetails')

describe('Device Collection - Devices and Device Details', () => {

    const specDeviceDetials = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Device Collection - Devices and Device Details`)
                                            .setTestFunc(testViewDeviceDetails)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    callSpecs(specDeviceDetials)
})