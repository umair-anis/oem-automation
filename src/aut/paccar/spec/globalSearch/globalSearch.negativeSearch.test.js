'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testValidateDOGSearchReturnsNothing } = require('../../test/globalSearch/testValidateDOGSearchReturnsNothing')
let { testValidateDOGRegionSearchReturnsNothing } = require('../../test/globalSearch/testValidateDOGRegionSearchReturnsNothing')

describe(`Global Search - Negative Search`, () => {

    const specDOGNothing = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Global Search - Negative Search - Search for DOG They Are Not In Returns Nothing`)
                                            .setTestFunc(testValidateDOGSearchReturnsNothing)
                                            .setPassingRoles( [`customeradmin`] )
                                            .build()

    const specDOGRegionNothing = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Global Search - Negative Search - Search for DOG Region They Are Not In Returns Nothing`)
                                            .setTestFunc(testValidateDOGRegionSearchReturnsNothing)
                                            .setPassingRoles( [`customeradmin`] )
                                            .build()

    callSpecs(specDOGNothing)
    callSpecs(specDOGRegionNothing)
})