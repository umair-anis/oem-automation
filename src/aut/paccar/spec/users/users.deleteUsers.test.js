'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testDeleteUser } = require('../../test/user/testDeleteUser')

describe(`Users - Delete User`, () => {

    const specDelete = SpecBuilder().setPortal(`Paccar Portal`)
                                  .setPortalType(`Staging`)
                                  .setName(`Users - Delete User`)
                                  .setTestFunc(testDeleteUser)
                                  .setPassingRoles( [`paccaradmin`] )
                                  .setPassingData( Object.freeze(require('../../testData/users/deleteUsers/paccar/passData.json')).data )
                                  .build()
    
    callSpecs(specDelete)
})