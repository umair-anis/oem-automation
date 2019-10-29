'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

const { testCustomer_Software } = require('../../test/customer/testCustomer_Software')

describe('Customer - Software', () => {
  
  const specSoftware = SpecBuilder().setPortal(`Paccar Portal`)
                                        .setPortalType(`Staging`)
                                        .setName(`Customer - Software - Set Software OTA Updates to Inactive, then Active`)
                                        .setTestFunc(testCustomer_Software)
                                        .setPassingRoles( [`otaTestAdmin`] )
                                        .build()

  callSpecs(specSoftware)
})
