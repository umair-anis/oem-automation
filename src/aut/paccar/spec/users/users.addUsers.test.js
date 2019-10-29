'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testAddUser_DealerAdmin } = require('../../test/user/testAddUser_DealerAdmin')
let { testAddUser_DealerOwnerAdmin } = require('../../test/user/testAddUser_DealerOwnerAdmin')
let { testAddUser_DealerRegionAdmin } = require('../../test/user/testAddUser_DealerRegionAdmin')

let { testAddUser } = require('../../test/user/testAddUser')
let { testInvalidUser } = require('../../test/user/testInvalidUser')

describe(`Users - Add User`, () => {

    const specPaccar = SpecBuilder().setPortal(`Paccar Portal`)
                                  .setPortalType(`Staging`)
                                  .setName(`Users - Add User`)
                                  .setTestFunc(testAddUser)
                                  .setPassingRoles( [`paccaradmin`] )
                                  .setPassingData( Object.freeze(require('../../testData/users/addUsers/paccar/passData.json')).data )
                                  .setFailingData( Object.freeze(require('../../testData/users/addUsers/paccar/failData.json')).data )
                                  .build()

    const specCustomerAdmin = SpecBuilder().setPortal(`Paccar Portal`)
                                        .setPortalType(`Staging`)
                                        .setName(`Users - Add User`)
                                        .setTestFunc(testAddUser)
                                        .setPassingRoles( [`customeradmin`] )
                                        .setPassingData( Object.freeze(require('../../testData/users/addUsers/customer/passData.json')).data )
                                        .setFailingData( Object.freeze(require('../../testData/users/addUsers/customer/failData.json')).data )
                                        .build()

    const specDealerAdmin = SpecBuilder().setPortal(`Paccar Portal`)
                                        .setPortalType(`Staging`)
                                        .setName(`Users - Add User`)
                                        .setTestFunc(testAddUser_DealerAdmin)
                                        .setPassingRoles( [`dealeradmin`] )
                                        .build()

    const specDOAdmin = SpecBuilder().setPortal(`Paccar Portal`)
                                        .setPortalType(`Staging`)
                                        .setName(`Users - Add User`)
                                        .setTestFunc(testAddUser_DealerOwnerAdmin)
                                        .setPassingRoles( [`dealerowneradmin`] )
                                        .build()

    const specDRAdmin = SpecBuilder().setPortal(`Paccar Portal`)
                                        .setPortalType(`Staging`)
                                        .setName(`Users - Add User`)
                                        .setTestFunc(testAddUser_DealerRegionAdmin)
                                        .setPassingRoles( [`dealerregionadmin`] )
                                        .build()

    const specInvPassword = SpecBuilder().setPortal(`Paccar Portal`)
                                        .setPortalType(`Staging`)
                                        .setName(`Users - Add User - Invalid Password`)
                                        .setTestFunc(testInvalidUser)
                                        .setPassingRoles( [`paccaradmin`] )
                                        .build()
    
    callSpecs(specPaccar)
    callSpecs(specCustomerAdmin)
    callSpecs(specDealerAdmin)
    callSpecs(specDOAdmin)
    callSpecs(specDRAdmin)
    callSpecs(specInvPassword)
})
