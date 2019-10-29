'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testInvalidLogin } = require('../../test/login_logout/testInvalidLogin')

describe(`Login - Invalid Login Credentials`, () => {

    const specInvalidLogin = SpecBuilder().setPortal(`Paccar Portal`)
                                        .setPortalType(`Staging`)
                                        .setName(`Login - Invalid Login Credentials`)
                                        .setTestFunc(testInvalidLogin)
                                        .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`, `kenmexpaccaradmin`, `kenmexsuperadmin`, `paccaradmin`, `paccaruser`, `paccarpoweruser`, 
                                                            `divisionuser`, `divisionuser1`, `dealerowneradmin`, `dealerowneruser`, `dealerpoweruser`, `dealerregionadmin`, `dealerregionuser`, `dealeradmin`, `dealeruser`, 
                                                            `dealertech`, `spanishUser`, `cumminsuser`, `factoryworker`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                        .build()
              
    callSpecs(specInvalidLogin)
})