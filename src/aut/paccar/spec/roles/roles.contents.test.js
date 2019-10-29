'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testIsRole } = require('../../test/roles/testIsRole')

describe(`Roles - Table Contents`, () => {

    const specIsRole = SpecBuilder().setPortal(`Paccar Portal`)
                                        .setPortalType(`Staging`)
                                        .setName(`Roles - Table Contents - Valid Role`)
                                        .setTestFunc(testIsRole)
                                        .setPassingRoles( [`peoplenetadmin`] )
                                        .setPassingData( Object.freeze(require('../../testData/roles/passData.json')).data )
                                        .setFailingData( Object.freeze(require('../../testData/roles/failData.json')).data )
                                        .build()

    callSpecs(specIsRole)
})