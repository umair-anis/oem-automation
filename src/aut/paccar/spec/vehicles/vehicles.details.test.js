'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

const { testValidateVehicleDetails } = require('../../test/vehicle/testValidateVehicleDetails')
const { testRunDiagnostics } = require('../../test/vehicle/testRunDiagnostics')
const { testIsAuthorizedServiceCenter } = require('../../test/vehicle/testIsAuthorizedServiceCenter')

describe(`Vehicles - Vehicle Details`, () => {

  const specDetailVals = SpecBuilder().setPortal(`Paccar Portal`)
                                    .setPortalType(`Staging`)
                                    .setName(`Vehicles - Vehicle Details - Validate Correct Vehicle Detail Values`)
                                    .setTestFunc(testValidateVehicleDetails)
                                    .setPassingRoles( [`peoplenetadmin`] )
                                    .setPassingData( Object.freeze(require('../../testData/vehicles/vehicleDetails/passData.json')).data )
                                    .build()

  const specRunDiag = SpecBuilder().setPortal(`Paccar Portal`)
                                    .setPortalType(`Staging`)
                                    .setName(`Vehicles - Vehicle Details - Run Diagnostics - Validate Run Diagnostics Vehicle Details`)
                                    .setTestFunc(testRunDiagnostics)
                                    .setPassingRoles( [`peoplenetadmin`] )
                                    .build()

  const specAuthServ = SpecBuilder().setPortal(`Paccar Portal`)
                                    .setPortalType(`Staging`)
                                    .setName(`Vehicles - Vehicle Details - Authorized Service Centers - Validate a certain Authorized Dealer is in Authorized Service Centers`)
                                    .setTestFunc(testIsAuthorizedServiceCenter)
                                    .setPassingRoles( [`peoplenetadmin`] )
                                    .setPassingData( Object.freeze(require('../../testData/vehicles/faultDetails/authorizedDealers/passData.json')).data )
                                    .build()

  callSpecs(specDetailVals)
  callSpecs(specRunDiag)
  callSpecs(specAuthServ)
})
