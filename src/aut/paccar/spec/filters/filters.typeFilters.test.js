'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testCustomersFiltersByType } = require('../../test/filters/testCustomersFiltersByType')
let { testUniversalFilter } = require('../../test/filters/testUniversalFilter')

describe(`Filters - Filter by Many Different Types`, () => {
    
    const specDiffTypes = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Filters - Filter by Many Different Types - Customers Table`)
                                            .setTestFunc(testCustomersFiltersByType)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    const specUniversal = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Filters - Filter by Many Different Types - A Universal Filter is Active Across Multiple Applicable Pages`)
                                            .setTestFunc(testUniversalFilter)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    callSpecs(specDiffTypes)
    callSpecs(specUniversal)
})