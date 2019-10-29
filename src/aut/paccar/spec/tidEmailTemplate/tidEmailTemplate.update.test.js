'use strict'

const { callSpecs } = require('../../../../core/spec/callSpecs')
const { SpecBuilder } = require('../../../../core/spec/SpecBuilder')
const { testTIDEmailTemplate } = require('../../test/tidEmailTemplate/testTIDEmailTemplate')

describe(`TID Email Template - Update Template`, () => {
  const specTIDEmailTemp = SpecBuilder().setPortal(`Paccar Portal`)
    .setPortalType(`Staging`)
    .setName(`TID Email Template - Update Template`)
    .setTestFunc(testTIDEmailTemplate)
    .setPassingRoles([`otaTestAdmin`, `kenmexsuperadmin`, `peoplenetadmin`, `spanishUser`])
    .setPassingData(Object.freeze(require('../../testData/tidEmailTemplate/passData.json')).data)
    .setFailingData(Object.freeze(require('../../testData/tidEmailTemplate/failData.json')).data)
    .build()

  callSpecs(specTIDEmailTemp)
})
