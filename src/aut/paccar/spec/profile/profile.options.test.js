'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testValidatePrivacyTerms } = require('../../test/profile/testValidatePrivacyTerms')
let { testValidateChangeLogs } = require('../../test/profile/testValidateChangeLogs')
let { testValidateReleaseNotes } = require('../../test/profile/testValidateReleaseNotes')
let { testValidateHelp } = require('../../test/profile/testValidateHelp')

describe(`Profile Options`, () => {

    const specPrivacyTerms = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Profile Options - Privacy & Terms`)
                                            .setTestFunc(testValidatePrivacyTerms)
                                            .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`, `kenmexpaccaradmin`, `kenmexsuperadmin`, `paccaradmin`, `paccaruser`, `paccarpoweruser`, 
                                                                `divisionuser`, `divisionuser1`, `dealerowneradmin`, `dealerowneruser`, `dealerpoweruser`, `dealerregionadmin`, `dealerregionuser`, `dealeradmin`, `dealeruser`, 
                                                                `dealertech`, `spanishUser`, `cumminsuser`, `factoryworker`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                            .build()

    const specChangeLogs = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Profile Options - Change Logs`)
                                            .setTestFunc(testValidateChangeLogs)
                                            .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`] )
                                            .build()

    const specReleaseNotes = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Profile Options - Release Notes`)
                                            .setTestFunc(testValidateReleaseNotes)
                                            .setPassingRoles( [`otaTestAdmin`] )
                                            .build()

    const specHelp = SpecBuilder().setPortal(`Paccar Portal`)
                                    .setPortalType(`Staging`)
                                    .setName(`Profile Options - Help English`)
                                    .setTestFunc(testValidateHelp)
                                    .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`, `paccaradmin`, `paccaruser`, `paccarpoweruser`, 
                                                       `divisionuser`, `divisionuser1`, `dealerowneradmin`, `dealerowneruser`, `dealerpoweruser`, `dealerregionadmin`, `dealerregionuser`, `dealeradmin`, `dealeruser`, 
                                                       `dealertech`, `cumminsuser`, `factoryworker`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                    .build()

    callSpecs(specPrivacyTerms)
    callSpecs(specChangeLogs)
    callSpecs(specReleaseNotes)
    callSpecs(specHelp)
})