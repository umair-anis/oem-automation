'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testLoginLogout } = require('../../test/login_logout/testLoginLogout')

describe(`Login - Valid Login Credentials, Logout`, () => {

    const specValidLogin = SpecBuilder().setPortal(`Paccar Portal`)
                                        .setPortalType(`Staging`)
                                        .setName(`Login - Valid Login Credentials, Logout`)
                                        .setTestFunc(testLoginLogout)
                                        .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`, `kenmexpaccaradmin`, `kenmexsuperadmin`, `paccaradmin`, `paccaruser`, `paccarpoweruser`, 
                                                            `divisionuser`, `divisionuser1`, `dealerowneradmin`, `dealerowneruser`, `dealerpoweruser`, `dealerregionadmin`, `dealerregionuser`, `dealeradmin`, `dealeruser`, 
                                                            `dealertech`, `spanishUser`, `cumminsuser`, `factoryworker`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                        .build()
              
    callSpecs(specValidLogin)
    
})