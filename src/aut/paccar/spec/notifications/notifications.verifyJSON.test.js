'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testVerifyNotificationJSON } = require('../../test/notifications/testVerifyNotificationJSON')

describe(`Notifications - Verify JSON`, () => {

    const specJSON = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Notifications - Verify JSON`)
                                            .setTestFunc(testVerifyNotificationJSON)
                                            .setPassingRoles( [`paccaradmin`] )
                                            .setPassingData( Object.freeze(require('../../testData/notifications/passData.json')).data )
                                            .setFailingData( Object.freeze(require('../../testData/notifications/failData.json')).data )
                                            .build()

    callSpecs(specJSON)
})