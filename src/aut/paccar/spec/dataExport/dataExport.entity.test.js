'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

const { testExportEntity } = require('../../test/dataExport/testExportEntity')

describe('Data Export - Export Entity', () => {

  const specEntity = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Data Export - Export Entity`)
                                            .setTestFunc(testExportEntity)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

  callSpecs(specEntity)
})
