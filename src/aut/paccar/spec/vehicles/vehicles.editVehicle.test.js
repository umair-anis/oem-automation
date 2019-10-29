'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

const { testEditVehicle } = require('../../test/vehicle/testEditVehicle')

describe(`Vehicles - Edit Vehicle`, () => {

  const specPNet = SpecBuilder().setPortal(`Paccar Portal`)
                                    .setPortalType(`Staging`)
                                    .setName(`Vehicles - Edit Vehicle - PeopleNet Admin`)
                                    .setTestFunc(testEditVehicle)
                                    .setPassingRoles( [`peoplenetadmin`] )
                                    .setPassingData( Object.freeze(require('../../testData/vehicles/editVehicle/peoplenetadmin/passData.json')).data )
                                    .build()
                                    
  const specPaccar = SpecBuilder().setPortal(`Paccar Portal`)
                                    .setPortalType(`Staging`)
                                    .setName(`Vehicles - Edit Vehicle - Paccar Admin`)
                                    .setTestFunc(testEditVehicle)
                                    .setPassingRoles( [`paccaradmin`] )
                                    .setPassingData( Object.freeze(require('../../testData/vehicles/editVehicle/paccaradmin/passData.json')).data )
                                    .build()

  const specCustomer = SpecBuilder().setPortal(`Paccar Portal`)
                                    .setPortalType(`Staging`)
                                    .setName(`Vehicles - Edit Vehicle - Customer Admin`)
                                    .setTestFunc(testEditVehicle)
                                    .setPassingRoles( [`customeradmin`] )
                                    .setPassingData( Object.freeze(require('../../testData/vehicles/editVehicle/customeradmin/passData.json')).data )
                                    .build()

  const specDealer = SpecBuilder().setPortal(`Paccar Portal`)
                                    .setPortalType(`Staging`)
                                    .setName(`Vehicles - Edit Vehicle - Dealer Admin`)
                                    .setTestFunc(testEditVehicle)
                                    .setPassingRoles( [`dealeradmin`] )
                                    .setPassingData( Object.freeze(require('../../testData/vehicles/editVehicle/dealeradmin/passData.json')).data )
                                    .build()

  const specDOG = SpecBuilder().setPortal(`Paccar Portal`)
                                    .setPortalType(`Staging`)
                                    .setName(`Vehicles - Edit Vehicle - Dealer Owner Admin`)
                                    .setTestFunc(testEditVehicle)
                                    .setPassingRoles( [`dealerowneradmin`] )
                                    .setPassingData( Object.freeze(require('../../testData/vehicles/editVehicle/dealerowneradmin/passData.json')).data )
                                    .build()

  const specDRA = SpecBuilder().setPortal(`Paccar Portal`)
                                    .setPortalType(`Staging`)
                                    .setName(`Vehicles - Edit Vehicle - Dealer Region Admin`)
                                    .setTestFunc(testEditVehicle)
                                    .setPassingRoles( [`dealerregionadmin`] )
                                    .setPassingData( Object.freeze(require('../../testData/vehicles/editVehicle/dealerregionadmin/passData.json')).data )
                                    .build()

  callSpecs(specPNet)
  callSpecs(specPaccar)
  callSpecs(specCustomer)
  callSpecs(specDealer)
  callSpecs(specDOG)
  callSpecs(specDRA)
})
