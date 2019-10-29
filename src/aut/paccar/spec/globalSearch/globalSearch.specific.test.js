'use strict'

const { callSpecs } = require('../../../../core/spec/callSpecs')
const { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

const { testValidateSpecificSearch } = require('../../test/globalSearch/testValidateSpecificSearch')

describe(`Global Search - Specific Search`, () => {
  const specSpecific = SpecBuilder().setPortal(`Paccar Portal`)
    .setPortalType(`Staging`)
    .setName(`Global Search - Specific Search`)
    .setTestFunc(testValidateSpecificSearch)
    .setPassingRoles([`paccaradmin`])
    .setPassingData(Object.freeze(require('../../testData/globalSearch/specificSearches/passData.json')).data)
    .setRetryCount(2)
    .build()

  const specSpecificDevice = SpecBuilder().setPortal(`Paccar Portal`)
    .setPortalType(`Staging`)
    .setName(`Global Search - Specific Device Search`)
    .setTestFunc(testValidateSpecificSearch)
    .setPassingRoles([`peoplenetadmin`])
    .setPassingData(Object.freeze(require('../../testData/globalSearch/specificSearches/passDataDevice.json')).data)
    .setRetryCount(2)
    .build()

  callSpecs(specSpecific)
  callSpecs(specSpecificDevice)
})
