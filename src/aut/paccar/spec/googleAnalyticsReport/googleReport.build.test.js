'use strict'

const { callSpecs } = require('../../../../core/spec/callSpecs')
const { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

const { testGoogleReport } = require('../../test/googleAnalyticsReport/testGoogleReport')

describe(`Google Analytics Report - Build Report, Validate in Data Export`, () => {

  const garSpecs = SpecBuilder().setPortal(`Paccar Portal`)
    .setPortalType(`Staging`)
    .setName(`Google Analytics Report - Build Report, Validate in Data Export`)
    .setTestFunc(testGoogleReport)
    .setPassingRoles([`otaTestAdmin`, `peoplenetadmin`, `paccaradmin`])
    .setPassingData(Object.freeze(require('../../testData/googleAnalyticsReport/passData.json')).data)
    .setFailingData(Object.freeze(require('../../testData/googleAnalyticsReport/failData.json')).data)
    .build()

  callSpecs(garSpecs)
})
