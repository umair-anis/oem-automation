'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testCollectionOTap } = require('../../test/deviceCollections/testCollectionOTap')
let { testCollectionVinDiscovery } = require('../../test/deviceCollections/testCollectionVinDiscovery')
let { testCollectionPMGVersionReq } = require('../../test/deviceCollections/testCollectionPMGVersionReq')
let { testCollectionForceCall } = require('../../test/deviceCollections/testCollectionForceCall')

describe('Device Collection - Features', () => {

    const specOTap = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Device Collection - Features - OTap`)
                                            .setTestFunc(testCollectionOTap)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    const specVinDisc = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Device Collection - Features - VinDiscovery`)
                                            .setTestFunc(testCollectionVinDiscovery)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    const specPMGVerReq = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Device Collection - Features - PMG Version Request`)
                                            .setTestFunc(testCollectionPMGVersionReq)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    const specForceCall = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Device Collection - Features - Force Call`)
                                            .setTestFunc(testCollectionForceCall)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    callSpecs(specOTap)
    callSpecs(specVinDisc)
    callSpecs(specPMGVerReq)
    callSpecs(specForceCall)
})