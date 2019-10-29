'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testTopTenFaults } = require('../../test/topTenFaults/testTopTenFaults')

describe(`Top 10 Faults - Load Vehicles Table`, () => {

    const specTIDEmailTemp = SpecBuilder().setPortal(`Paccar Portal`)
                                          .setPortalType(`Staging`)
                                          .setName(`Top 10 Faults - Load Vehicles Table With Correct DTC Filter`)
                                          .setTestFunc(testTopTenFaults)
                                          .setPassingRoles( [`peoplenetadmin`] )
                                          .setPassingData( Object.freeze(require('../../testData/topTenFaults/passData.json')).data )
                                          .setFailingData( Object.freeze(require('../../testData/topTenFaults/failData.json')).data )
                                          .build()

    callSpecs(specTIDEmailTemp)
})