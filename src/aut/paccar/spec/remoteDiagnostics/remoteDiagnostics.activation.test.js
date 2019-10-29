'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testDeactivateVins } = require('../../test/remoteDiagnostics/testDeactivateVins')
let { testReactivateVins } = require('../../test/remoteDiagnostics/testReactivateVins')

describe(`Remote Diagnostics - Activation Functionality`, () => {

    const specDeactivate = SpecBuilder().setPortal(`Paccar Portal`)
                                                .setPortalType(`Staging`)
                                                .setName(`Remote Diagnostics - Deactivate Functionality`)
                                                .setTestFunc(testDeactivateVins)
                                                .setPassingRoles( [`paccaradmin`] )
                                                .setPassingData( Object.freeze(require('../../testData/remoteDiagnostics/deactivate/passData.json')).data )
                                                .setFailingData( Object.freeze(require('../../testData/remoteDiagnostics/deactivate/failData.json')).data )
                                                .build()

    const specReactivate = SpecBuilder().setPortal(`Paccar Portal`)
                                                .setPortalType(`Staging`)
                                                .setName(`Remote Diagnostics - Reactivate Functionality`)
                                                .setTestFunc(testReactivateVins)
                                                .setPassingRoles( [`paccaradmin`] )
                                                .setPassingData( Object.freeze(require('../../testData/remoteDiagnostics/reactivate/passData.json')).data )
                                                .setFailingData( Object.freeze(require('../../testData/remoteDiagnostics/reactivate/failData.json')).data )
                                                .build()

    //callSpecs(specDeactivate)
    callSpecs(specReactivate)
})