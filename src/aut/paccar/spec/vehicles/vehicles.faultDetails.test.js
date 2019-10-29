'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

const { testVehicleFault_Details } = require('../../test/vehicle/testVehicleFault_Details')
const { testVehicleFault_SnapshotData } = require('../../test/vehicle/testVehicleFault_SnapshotData')

describe(`Vehicles - Fault Details`, () => {
  
  const specFaultDetails = SpecBuilder().setPortal(`Paccar Portal`)
                                    .setPortalType(`Staging`)
                                    .setName(`Vehicles - Fault Details - Valid Fault Details`)
                                    .setTestFunc(testVehicleFault_Details)
                                    .setPassingRoles( [`otaTestAdmin`] )
                                    .setPassingData( Object.freeze(require('../../testData/vehicles/faultDetails/passData.json')).data )
                                    .build()

  const specFaultSnap = SpecBuilder().setPortal(`Paccar Portal`)
                                    .setPortalType(`Staging`)
                                    .setName(`Vehicles - Fault Details - Snapshot Data`)
                                    .setTestFunc(testVehicleFault_SnapshotData)
                                    .setPassingRoles( [`peoplenetadmin`] )
                                    .build()

  callSpecs(specFaultDetails)
  callSpecs(specFaultSnap)
})
