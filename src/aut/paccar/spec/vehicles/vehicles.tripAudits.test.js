'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testViewTripAuditFault } = require('../../test/vehicle/testViewTripAuditFault')

describe(`Vehicles - Trip Audits`, () => {

    const specTripLogs = SpecBuilder().setPortal(`Paccar Portal`)
                                    .setPortalType(`Staging`)
                                    .setName(`Vehicles - Trip Audits - Validate Trip Audits Fault Logs`)
                                    .setTestFunc(testViewTripAuditFault)
                                    .setPassingRoles( [`peoplenetadmin`] )
                                    .setPassingData( Object.freeze(require('../../testData/vehicles/viewTripAudit/passData.json')).data )
                                    .build()

    callSpecs(specTripLogs)
})