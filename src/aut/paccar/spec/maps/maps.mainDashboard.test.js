'use strict'

const { callSpecs } = require('../../../../core/spec/callSpecs')
const { SpecBuilder } = require('../../../../core/spec/SpecBuilder')
const { testMapFunctionality } = require('../../test/map/testMapFunctionality')
const { testClickDealerFlag } = require('../../test/map/testClickDealerFlag')
const { testClickVehiclePin } = require('../../test/map/testClickVehiclePin')

describe(`Maps - Functionality`, () => {
  const specMapFunc = SpecBuilder().setPortal(`Paccar Portal`)
    .setPortalType(`Staging`)
    .setName(`Maps - Functionality - All Map Tools`)
    .setTestFunc(testMapFunctionality)
    .setPassingRoles([`otaTestAdmin`, `peoplenetadmin`, `paccaruser`, `paccarpoweruser`,
      `divisionuser`, `divisionuser1`, `dealerowneradmin`, `dealerowneruser`, `dealerpoweruser`, `dealerregionadmin`, `dealerregionuser`, `dealeradmin`, `dealeruser`,
      `dealertech`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `preferredcustomeruser`, `customeruser`, `customerusercummins`])
    .build()

  const specDealerFlag = SpecBuilder().setPortal(`Paccar Portal`)
    .setPortalType(`Staging`)
    .setName(`Maps - Functionality - Clicking Dealer Flag on the Map, Loading that Particular Dealer's Details`)
    .setTestFunc(testClickDealerFlag)
    .setPassingRoles([`otaTestAdmin`, `peoplenetadmin`, `paccaradmin`])
    .build()

  const specVehiclePin = SpecBuilder().setPortal(`Paccar Portal`)
    .setPortalType(`Staging`)
    .setName(`Maps - Functionality - Clicking Vehicle Pin on the Map, Loading that Particular Vehicles's Details`)
    .setTestFunc(testClickVehiclePin)
    .setPassingRoles([`otaTestAdmin`, `paccaradmin`])
    .build()

  callSpecs(specMapFunc)
  callSpecs(specDealerFlag)
  callSpecs(specVehiclePin)
})
