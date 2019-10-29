'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testViewExecutionDetails } = require('../../test/dataImport/testViewExecutionDetails')

describe('Data Import - Information', () => {

    const specImportDetails = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Data Import - Information - Execution Link Contains Correct Informations`)
                                            .setTestFunc(testViewExecutionDetails)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .setPassingData( Object.freeze(require('../../testData/dataImport/passData.json')).data )
                                            .setFailingData( Object.freeze(require('../../testData/dataImport/failData.json')).data )
                                            .build()

    callSpecs(specImportDetails)
})