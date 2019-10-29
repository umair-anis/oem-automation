'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testValidSubscriptionFilters } = require('../../test/subscriptions/testValidSubscriptionFilters')

describe(`Subscriptions - Correct Filters`, () => {

    const specCheckout = SpecBuilder().setPortal(`Paccar Portal`)
                                        .setPortalType(`Staging`)
                                        .setName(`Subscriptions - Correct Filters`)
                                        .setTestFunc(testValidSubscriptionFilters)
                                        .setPassingRoles( [`paccaradmin`] )
                                        .build()

    callSpecs(specCheckout)
})