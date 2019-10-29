'use strict'

const { callSpecs } = require('../../../../core/spec/callSpecs')
const { SpecBuilder } = require('../../../../core/spec/SpecBuilder')
const { testBreadcrumb_DOG } = require('../../test/breadcrumb/testBreadcrumb_DOG')

describe('Breadcrumb - Functionality', () => {
  const specBreadcrumbDOG = SpecBuilder().setPortal(`Paccar Portal`)
    .setPortalType(`Staging`)
    .setName(`Breadcrumb - Functionality - Dealer Owner Groups`)
    .setTestFunc(testBreadcrumb_DOG)
    .setPassingRoles([`otaTestAdmin`, `peoplenetadmin`, `paccaradmin`, `paccaruser`, `paccarpoweruser`, `divisionuser`, `divisionuser1`])
    .build()

  callSpecs(specBreadcrumbDOG)
})
