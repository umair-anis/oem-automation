'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

const { testCustomer_SubscribedUsers } = require('../../test/customer/testCustomer_SubscribedUsers')

describe('Customer - Subscribed Users', () => {
  
  const specSubscribing = SpecBuilder().setPortal(`Paccar Portal`)
                                        .setPortalType(`Staging`)
                                        .setName(`Customer - Subscribed Users - Subscribing, then UnSubscribing, to a User`)
                                        .setTestFunc(testCustomer_SubscribedUsers)
                                        .setPassingRoles( [`paccaradmin`] )
                                        .setPassingData( Object.freeze(require('../../testData/customer/subscribedUsers/passData.json')).data )
                                        .build()

  callSpecs(specSubscribing)
})
