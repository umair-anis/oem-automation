'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testSubscriptionCheckout } = require('../../test/subscriptions/testSubscriptionCheckout')

describe(`Subscriptions - Checkout`, () => {

    const specCheckout = SpecBuilder().setPortal(`Paccar Portal`)
                                        .setPortalType(`Staging`)
                                        .setName(`Subscriptions - Checkout`)
                                        .setTestFunc(testSubscriptionCheckout)
                                        .setPassingRoles( [`paccaradmin`] )
                                        .setPassingData( Object.freeze(require('../../testData/subscriptions/passData.json')).data )
                                        .setFailingData( Object.freeze(require('../../testData/subscriptions/failData.json')).data )
                                        .build()

    callSpecs(specCheckout)
})