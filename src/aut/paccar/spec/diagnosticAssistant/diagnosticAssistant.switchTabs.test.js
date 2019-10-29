'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testDiagnosticAssistant } = require('../../test/diagnosticAssistant/testDiagnosticAssistant')

describe(`Diagnostic Assistant - Load Diagnostic Assistant Website`, () => {

    const specDiagAssistant = SpecBuilder().setPortal(`Paccar Portal`)
                                          .setPortalType(`Staging`)
                                          .setName(`Diagnostic Assistant - Load Diagnostic Assistant Website`)
                                          .setTestFunc(testDiagnosticAssistant)
                                          .setPassingRoles( [`otaTestAdmin`, `kenmexsuperadmin`, `peoplenetadmin`, `paccaradmin`, `spanishUser`, `dealerowneradmin`, `dealerregionadmin`, `dealeradmin`, `paccaruser`, `kenmexpaccaradmin`, `dealertech`] )
                                          .build()

    callSpecs(specDiagAssistant)
})