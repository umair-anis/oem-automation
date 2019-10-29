'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testValidateGeneralSearch } = require('../../test/globalSearch/testValidateGeneralSearch')

describe(`Global Search - General Search`, () => {

    const specGeneralSearch = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Global Search - General Search Leads to List of Results Options`)
                                            .setTestFunc(testValidateGeneralSearch)
                                            .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`, `kenmexpaccaradmin`, `kenmexsuperadmin`, `paccaradmin`, `paccaruser`, `paccarpoweruser`, 
                                                                `divisionuser`, `divisionuser1`, `dealerowneradmin`, `dealerowneruser`, `dealerpoweruser`, `dealerregionadmin`, `dealerregionuser`, `dealeradmin`, `dealeruser`, 
                                                                `dealertech`, `spanishUser`, `cumminsuser`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                            .build()

    callSpecs(specGeneralSearch)
})