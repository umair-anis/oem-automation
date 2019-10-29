'use strict'

const { callSpecs } = require('../../../../core/spec/callSpecs')
const { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

const { testDeleteManufacturer } = require('../../test/manufacturers/testDeleteManufacturer')

describe(`Manufacturers - Cannot Delete Manufacturer`, () => {
  const specDeleteMan = SpecBuilder().setPortal(`Paccar Portal`)
    .setPortalType(`Staging`)
    .setName(`Manufacturers - Cannot Delete Manufacturer`)
    .setTestFunc(testDeleteManufacturer)
    .setPassingRoles([`otaTestAdmin`, `peoplenetadmin`])
    .setPassingData(Object.freeze(require('../../testData/manufacturer/passData.json')).data)
    .setFailingData(Object.freeze(require('../../testData/manufacturer/failData.json')).data)
    .build()

  callSpecs(specDeleteMan)
})
