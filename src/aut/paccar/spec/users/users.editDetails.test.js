'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testEditUserNotifications } = require('../../test/user/testEditUserNotifications')
let { testEditUserProfile } = require('../../test/user/testEditUserProfile')
let { testEditUserTags } = require('../../test/user/testEditUserTags')

describe('Users - Edit User', () => {

    const specNotifications = SpecBuilder().setPortal(`Paccar Portal`)
                                  .setPortalType(`Staging`)
                                  .setName(`Users - Edit User - Notifications`)
                                  .setTestFunc(testEditUserNotifications)
                                  .setPassingRoles( [`paccaradmin`] )
                                  .setPassingData( Object.freeze(require('../../testData/users/editUsers/notifications/passData.json')).data )
                                  .build()

    const specProfile = SpecBuilder().setPortal(`Paccar Portal`)
                                  .setPortalType(`Staging`)
                                  .setName(`Users - Edit User - Profile`)
                                  .setTestFunc(testEditUserProfile)
                                  .setPassingRoles( [`paccaradmin`] )
                                  .setPassingData( Object.freeze(require('../../testData/users/editUsers/profile/passData.json')).data )
                                  .build()

    const specTags = SpecBuilder().setPortal(`Paccar Portal`)
                                  .setPortalType(`Staging`)
                                  .setName(`Users - Edit User - Tag`)
                                  .setTestFunc(testEditUserTags)
                                  .setPassingRoles( [`peoplenetadmin`] )
                                  .setPassingData( Object.freeze(require('../../testData/users/editUsers/tags/passData.json')).data )
                                  .build()
    
    callSpecs(specNotifications)
    callSpecs(specProfile)
    callSpecs(specTags)

})