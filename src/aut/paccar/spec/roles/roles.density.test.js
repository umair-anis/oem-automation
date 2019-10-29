'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testDensityDisplays } = require('../../test/roles/testDensityDisplays')

describe(`Roles - Display Density`, () => {

    const specDensity = SpecBuilder().setPortal(`Paccar Portal`)
                                        .setPortalType(`Staging`)
                                        .setName(`Roles - Display Density - High Density Displays a Table, Low Density Displays a List of Cards`)
                                        .setTestFunc(testDensityDisplays)
                                        .setPassingRoles( [`peoplenetadmin`] )
                                        .build()

    callSpecs(specDensity)
})