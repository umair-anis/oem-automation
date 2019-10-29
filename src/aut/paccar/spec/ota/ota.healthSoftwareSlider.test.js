'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testClickHealthSoftwareSlider } = require('../../test/ota/testClickHealthSoftwareSlider')
let { testHealthSoftwareSliderConsistency } = require('../../test/ota/testHealthSoftwareSliderConsistency')

describe(`OTA - Health/Software Slider`, () => {

    const specSwitch = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`OTA - Health/Software Slider - Confirm Switching Health Dashboard to Software Dashboard`)
                                            .setTestFunc(testClickHealthSoftwareSlider)
                                            .setPassingRoles( [`otaTestAdmin`, `paccaruser`, `paccarpoweruser`, `divisionuser`, `divisionuser1`, `dealerowneradmin`, `dealerowneruser`, `dealerpoweruser`, `dealerregionadmin`, `dealerregionuser`, `dealeradmin`, `dealeruser`, 
                                            `dealertech`, `factoryworker`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                            .build()

    const specConsistent = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`OTA - Health/Software Slider - Slider Value is Consistent Across Multiple Pages`)
                                            .setTestFunc(testHealthSoftwareSliderConsistency)
                                            .setPassingRoles( [`otaTestAdmin`, `paccaruser`, `paccarpoweruser`, `divisionuser`, `divisionuser1`, `dealerowneradmin`, `dealerowneruser`, `dealerpoweruser`, `dealerregionadmin`, `dealerregionuser`, `dealeradmin`, `dealeruser`, 
                                            `dealertech`, `factoryworker`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                            .build()

    callSpecs(specSwitch)
    callSpecs(specConsistent)
})