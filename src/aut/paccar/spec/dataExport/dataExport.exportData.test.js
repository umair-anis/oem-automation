'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testExportDealerData } = require('../../test/dataExport/testExportDealerData')
let { testExportCustomerData } = require('../../test/dataExport/testExportCustomerData')
let { testExportUserData } = require('../../test/dataExport/testExportUserData')
let { testExportVehicleData } = require('../../test/dataExport/testExportVehicleData')
let { testExportOTASubscriptionData } = require('../../test/dataExport/testExportOTASubscriptionData')
let { testExportDeviceData } = require('../../test/dataExport/testExportDeviceData')
let { testExportRemoteDiagnostics } = require('../../test/dataExport/testExportRemoteDiagnostics')

describe('Data Export - Exported Table Data in Data Export Table', () => {

    const specDealerTable = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Data Export - Exported Table Data in Data Export Table - Dealers/Service Centers Table`)
                                            .setTestFunc(testExportDealerData)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    const specCustomerTable = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Data Export - Exported Table Data in Data Export Table - Customers Table`)
                                            .setTestFunc(testExportCustomerData)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    const specUserTable = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Data Export - Exported Table Data in Data Export Table - Users Table`)
                                            .setTestFunc(testExportUserData)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    const specVehicleTable = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Data Export - Exported Table Data in Data Export Table - Vehicles Table`)
                                            .setTestFunc(testExportVehicleData)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    const specOTASubTable = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Data Export - Exported Table Data in Data Export Table - OTA Subscriptions Table`)
                                            .setTestFunc(testExportOTASubscriptionData)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    const specDeviceTable = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Data Export - Exported Table Data in Data Export Table - Devices Table`)
                                            .setTestFunc(testExportDeviceData)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    const specRemoteDiagTable = SpecBuilder().setPortal(`Paccar Portal`)
                                                .setPortalType(`Staging`)
                                                .setName(`Data Export - Exported Table Data in Data Export Table - Remote Diagnostics Table`)
                                                .setTestFunc(testExportRemoteDiagnostics)
                                                .setPassingRoles( [`peoplenetadmin`] )
                                                .build()

    callSpecs(specDealerTable)
    callSpecs(specCustomerTable)
    callSpecs(specUserTable)
    callSpecs(specVehicleTable)
    callSpecs(specOTASubTable)
    callSpecs(specDeviceTable)
    callSpecs(specRemoteDiagTable)

})