'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testEditOEMInfo } = require('../../test/oems/testEditOEMInfo')
let { testEditOEMFactory } = require('../../test/oems/testEditOEMFactory')

describe(`OEM - Edit OEM Factories`, () => {

    const specEditInfo = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`OEM - Edit OEM Information - Name, Subscription, Warranty`)
                                            .setTestFunc(testEditOEMInfo)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .setPassingData( Object.freeze(require('../../testData/oems/info/passData.json')).data )
                                            .setFailingData( Object.freeze(require('../../testData/oems/info/failData.json')).data )
                                            .build()

    const specEditFactory = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`OEM - Edit OEM Factories - Add, Edit, Delete a Factory`)
                                            .setTestFunc(testEditOEMFactory)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .setPassingData( Object.freeze(require('../../testData/oems/factory/passData.json')).data )
                                            .setFailingData( Object.freeze(require('../../testData/oems/factory/failData.json')).data )
                                            .build()

    callSpecs(specEditInfo)
    callSpecs(specEditFactory)
})