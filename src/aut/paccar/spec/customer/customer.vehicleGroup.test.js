'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

const { testCustomer_AddDeleteVehicleGroup } = require('../../test/customer/testCustomer_AddDeleteVehicleGroup')
const { testCustomer_SubscribeAllGroups } = require('../../test/customer/testCustomer_SubscribeAllGroups')

describe('Customer - Vehicle Groups', () => {
  
  const specAddDelete = SpecBuilder().setPortal(`Paccar Portal`)
                                        .setPortalType(`Staging`)
                                        .setName(`Customer - Vehicle Groups - Adds, then Deletes, a Vehicle Group`)
                                        .setTestFunc(testCustomer_AddDeleteVehicleGroup)
                                        .setPassingRoles( [`paccaradmin`] )
                                        .build()

  const specBell = SpecBuilder().setPortal(`Paccar Portal`)
                                        .setPortalType(`Staging`)
                                        .setName(`Customer - Vehicle Groups - Bell Notification/Subscribing`)
                                        .setTestFunc(testCustomer_SubscribeAllGroups)
                                        .setPassingRoles( [`paccaradmin`] )
                                        .build()

  callSpecs(specAddDelete)
  callSpecs(specBell)
})
