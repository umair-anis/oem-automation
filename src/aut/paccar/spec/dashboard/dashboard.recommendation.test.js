'use strict'

const { callSpecs } = require('../../../../core/spec/callSpecs')
const { SpecBuilder } = require('../../../../core/spec/SpecBuilder')
const { testViewRecommendations } = require('../../test/dashboard/testViewRecommendations')
const { testVehicleRecommendation } = require('../../test/dashboard/testVehicleRecommendation')

describe('Dashboard - Recommendations Table', () => {
  const specRecTable = SpecBuilder().setPortal(`Paccar Portal`)
    .setPortalType(`Staging`)
    .setName(`Dashboard - Recommendations Table - Click View-Recommendation Buttons`)
    .setTestFunc(testViewRecommendations)
    .setPassingRoles([`otaTestAdmin`, `peoplenetadmin`, `kenmexpaccaradmin`, `kenmexsuperadmin`, `paccaradmin`, `paccaruser`, `paccarpoweruser`,
      `divisionuser`, `divisionuser1`, `dealerowneradmin`, `dealerowneruser`, `dealerpoweruser`, `dealerregionadmin`, `dealerregionuser`, `dealeradmin`, `dealeruser`,
      `dealertech`, `spanishUser`, `cumminsuser`, `factoryworker`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `preferredcustomeruser`, `customeruser`, `customerusercummins`])
    .build()

  const specVehicleFilters = SpecBuilder().setPortal(`Paccar Portal`)
    .setPortalType(`Staging`)
    .setName(`Dashboard - Recommendations Table - Recommendations Lead to Vehicle Table with Same Filter`)
    .setTestFunc(testVehicleRecommendation)
    .setPassingRoles([`otaTestAdmin`, `peoplenetadmin`, `paccaradmin`, `paccaruser`, `paccarpoweruser`,
      `divisionuser`, `divisionuser1`, `dealerowneradmin`, `dealerowneruser`, `dealerpoweruser`, `dealerregionadmin`, `dealerregionuser`, `dealeradmin`, `dealeruser`,
      `dealertech`, `cumminsuser`, `factoryworker`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `preferredcustomeruser`, `customeruser`, `customerusercummins`])
    .build()

  callSpecs(specRecTable)
  callSpecs(specVehicleFilters)
})
