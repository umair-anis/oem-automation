'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

const { testCustomerAdminSetsPrefferedDealer } = require('../../test/customer/testCustomerAdminSetsPrefferedDealer')
const { testCustomerSetJoinDealerNetwork } = require('../../test/customer/testCustomerSetJoinDealerNetwork')

describe('Customer - Dealer Network', () => {
  
  const specSetPreffered = SpecBuilder().setPortal(`Paccar Portal`)
                                        .setPortalType(`Staging`)
                                        .setName(`Customer - Dealer Network - Customer Admin Sets a Dealer/Service Center as Preferred Dealer`)
                                        .setTestFunc(testCustomerAdminSetsPrefferedDealer)
                                        .setPassingRoles( [`customeradmin`] )
                                        .build()

  const specJoinNetwork = SpecBuilder().setPortal(`Paccar Portal`)
                                        .setPortalType(`Staging`)
                                        .setName(`Customer - Dealer Network - Edit Customer to Join the Peterbilt and Kenworth Dealer Network`)
                                        .setTestFunc(testCustomerSetJoinDealerNetwork)
                                        .setPassingRoles( [`peoplenetadmin`] )
                                        .setPassingData( Object.freeze(require('../../testData/customer/editCustomer/passData.json')).data )
                                        .build()

  callSpecs(specSetPreffered)
  callSpecs(specJoinNetwork)
})
