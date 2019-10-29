'use strict'

const { callSpecs } = require('../../../../core/spec/callSpecs')
const { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

const { testDefaultSoftwareChipFilters } = require('../../test/ota/testDefaultSoftwareChipFilters')

describe(`OTA - Default software chip filters in vehicles list page`, () => {
  const defaultFilter = SpecBuilder().setPortal(`Paccar Portal`)
    .setPortalType(`Staging`)
    .setName(`OTA - Default software chip filters in vehicles list page`)
    .setTestFunc(testDefaultSoftwareChipFilters)
    .setPassingRoles([`otaTestAdmin`, `paccaradmin`])
    .build()

  callSpecs(defaultFilter)
})
