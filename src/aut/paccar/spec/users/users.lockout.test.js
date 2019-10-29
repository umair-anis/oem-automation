'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testLockoutUser } = require('../../test/user/testLockoutUser')

describe('Users - Lockout User', () => {

    const specLockout = SpecBuilder().setPortal(`Paccar Portal`)
                                    .setPortalType(`Staging`)
                                    .setName(`Users - Lockout User - Lockout a User (login with a valid email but invalid password) More Than 50 Times. Then Paccar Admin Unlocks their account`)
                                    .setTestFunc(testLockoutUser)
                                    .setPassingRoles( [`paccaradmin`] )
                                    .build()

    callSpecs(specLockout)

})