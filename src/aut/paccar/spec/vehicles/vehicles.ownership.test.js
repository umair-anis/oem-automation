'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

const { testIsOwnershipHistoryRecord } = require('../../test/vehicle/testIsOwnershipHistoryRecord')
const { testTransferOwnership } = require('../../test/vehicle/testTransferOwnership')

describe(`Vehicles - Ownership`, () => {

  const specHistRec = SpecBuilder().setPortal(`Paccar Portal`)
                                    .setPortalType(`Staging`)
                                    .setName(`Vehicles - Ownership - Ownership History - Validate a Certain History Record is in a Vehicle's Ownership History`)
                                    .setTestFunc(testIsOwnershipHistoryRecord)
                                    .setPassingRoles( [`peoplenetadmin`] )
                                    .setPassingData( Object.freeze(require('../../testData/vehicles/ownershipHistory/passData.json')).data )
                                    .build()

  const specTransfer = SpecBuilder().setPortal(`Paccar Portal`)
                                    .setPortalType(`Staging`)
                                    .setName(`Vehicles - Ownership - Transfer Ownership - Transferring a Vehicle to a Customer, then back to orginial Customer`)
                                    .setTestFunc(testTransferOwnership)
                                    .setPassingRoles( [`peoplenetadmin`] )
                                    .setPassingData( Object.freeze(require('../../testData/vehicles/transferOwnership/passData.json')).data )
                                    .build()

  callSpecs(specHistRec)
  callSpecs(specTransfer)
})
