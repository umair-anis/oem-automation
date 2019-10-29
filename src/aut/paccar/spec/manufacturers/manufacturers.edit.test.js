'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testEditManufacturer } = require('../../test/manufacturers/testEditManufacturer')

describe(`Manufacturers - Edit Manufacturer's Name`, () => {

    const specEditMan = SpecBuilder().setPortal(`Paccar Portal`)
                                        .setPortalType(`Staging`)
                                        .setName(`Manufacturers - Edit Manufacturer's Name`)
                                        .setTestFunc(testEditManufacturer)
                                        .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`] )
                                        .setPassingData( Object.freeze(require('../../testData/manufacturer/passData.json')).data )
                                        .setFailingData( Object.freeze(require('../../testData/manufacturer/failData.json')).data )
                                        .build()
              
    callSpecs(specEditMan)
})