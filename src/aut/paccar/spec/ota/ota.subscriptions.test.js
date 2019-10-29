'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testOTASubscriptionIsActive } = require('../../test/ota/testOTASubscriptionIsActive')
let { testLinkToCustomerDetails } = require('../../test/ota/testLinkToCustomerDetails')
let { testLinkToVehicleDetails } = require('../../test/ota/testLinkToVehicleDetails')

describe(`OTA - OTA Subscriptions`, () => {

    const specVINValid = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`OTA - OTA Subscriptions - Active OTA VIN is in OTA Subscriptions Table`)
                                            .setTestFunc(testOTASubscriptionIsActive)
                                            .setPassingRoles( [`otaTestAdmin`] )
                                            .setPassingData( Object.freeze(require('../../testData/ota/otaSubscriptions/passData.json')).data )
                                            .setFailingData( Object.freeze(require('../../testData/ota/otaSubscriptions/failData.json')).data )
                                            .build()

    const specCustomer = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`OTA - OTA Subscriptions - OTA Subscription Customer Link leads to Customer Details`)
                                            .setTestFunc(testLinkToCustomerDetails)
                                            .setPassingRoles( [`otaTestAdmin`] )
                                            .build()

    const specVehicle = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`OTA - OTA Subscriptions - OTA Subscription Vehicle Link leads to Vehicle Details`)
                                            .setTestFunc(testLinkToVehicleDetails)
                                            .setPassingRoles( [`otaTestAdmin`] )
                                            .build()

    callSpecs(specVINValid)
    callSpecs(specCustomer)
    callSpecs(specVehicle)
})