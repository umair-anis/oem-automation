'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testConfigureColumns_DealersTable } = require('../../test/configureColumns/testConfigureColumns_DealersTable')
let { testConfigureColumns_CustomersTable } = require('../../test/configureColumns/testConfigureColumns_CustomersTable')
let { testConfigureColumns_UsersTable } = require('../../test/configureColumns/testConfigureColumns_UsersTable')
let { testConfigureColumns_VehiclesTable } = require('../../test/configureColumns/testConfigureColumns_VehiclesTable')
let { testConfigureColumns_OTASubscriptionsTable } = require('../../test/configureColumns/testConfigureColumns_OTASubscriptionsTable')
let { testConfigureColumns_DeviceCollectionsTable } = require('../../test/configureColumns/testConfigureColumns_DeviceCollectionsTable')
let { testConfigureColumns_DevicesTable } = require('../../test/configureColumns/testConfigureColumns_DevicesTable')
let { testConfigureColumns_OEMsTable } = require('../../test/configureColumns/testConfigureColumns_OEMsTable')
let { testConfigureColumns_BlacklistTable } = require('../../test/configureColumns/testConfigureColumns_BlacklistTable')

describe('Configure Columns - Functionality', () => {

    const specDealerTable = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Configure Columns - Functionality - Reset Columns, Remove a Column, Mixup Column Order - Dealers/Service Centers Table`)
                                            .setTestFunc(testConfigureColumns_DealersTable)
                                            .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`, `spanishUser`, `paccaradmin`, `paccarpoweruser`, `dealerowneradmin`, `dealerregionadmin`, `dealeradmin`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `paccaruser`, `divisionuser`, `divisionuser1`, `dealerowneruser`, `dealerregionuser`,
                                                                `dealerpoweruser`, `kenmexpaccaradmin`, `dealeruser`, `dealertech`, , `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                            .build()

    const specCustomerTable = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Configure Columns - Functionality - Reset Columns, Remove a Column, Mixup Column Order - Customers Table`)
                                            .setTestFunc(testConfigureColumns_CustomersTable)
                                            .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`, `spanishUser`, `paccaradmin`, `paccarpoweruser`, `dealerowneradmin`, `dealerregionadmin`, `dealeradmin`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `paccaruser`, `divisionuser`, `divisionuser1`, `dealerowneruser`, `dealerregionuser`,
                                                                `dealerpoweruser`, `kenmexpaccaradmin`, `dealeruser`, `dealertech`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                            .build()

    const specUserTable = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Configure Columns - Functionality - Reset Columns, Remove a Column, Mixup Column Order - Users Table`)
                                            .setTestFunc(testConfigureColumns_UsersTable)
                                            .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`, `spanishUser`, `paccaradmin`, `paccarpoweruser`, `dealerowneradmin`, `dealerregionadmin`, `dealeradmin`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `paccaruser`, `divisionuser`, `divisionuser1`, `dealerowneruser`, `dealerregionuser`,
                                                                `dealerpoweruser`, `kenmexpaccaradmin`, `dealeruser`, `dealertech`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                            .build()

    const specVehicleTable = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Configure Columns - Functionality - Reset Columns, Remove a Column, Mixup Column Order - Vehicles Table`)
                                            .setTestFunc(testConfigureColumns_VehiclesTable)
                                            .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`, `spanishUser`, `paccaradmin`, `paccarpoweruser`, `dealerowneradmin`, `dealerregionadmin`, `dealeradmin`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `paccaruser`, `divisionuser`, `divisionuser1`, `factoryworker`, `dealerowneruser`, `dealerregionuser`,
                                                                `dealerpoweruser`, `kenmexpaccaradmin`, `dealeruser`, `dealertech`, `cumminsuser`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                            .build()

    const specOTATable = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Configure Columns - Functionality - Reset Columns, Remove a Column, Mixup Column Order - OTA Subscriptions Table`)
                                            .setTestFunc(testConfigureColumns_OTASubscriptionsTable)
                                            .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`] )
                                            .build()

    const specDeviceColTable = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Configure Columns - Functionality - Reset Columns, Remove a Column, Mixup Column Order - Device Collections Table`)
                                            .setTestFunc(testConfigureColumns_DeviceCollectionsTable)
                                            .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`] )
                                            .build()

    const specDeviceTable = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Configure Columns - Functionality - Reset Columns, Remove a Column, Mixup Column Order - Devices Table`)
                                            .setTestFunc(testConfigureColumns_DevicesTable)
                                            .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`] )
                                            .build()

    const specOEMTable = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Configure Columns - Functionality - Reset Columns, Remove a Column, Mixup Column Order - OEMs Table`)
                                            .setTestFunc(testConfigureColumns_OEMsTable)
                                            .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`] )
                                            .build()

    const specBlacklistTable = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Configure Columns - Functionality - Reset Columns, Remove a Column, Mixup Column Order - Blacklist Table`)
                                            .setTestFunc(testConfigureColumns_BlacklistTable)
                                            .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`] )
                                            .build()

    callSpecs(specDealerTable)
    callSpecs(specCustomerTable)
    callSpecs(specUserTable)
    callSpecs(specVehicleTable)
    callSpecs(specOTATable)
    callSpecs(specDeviceColTable)
    callSpecs(specDeviceTable)
    callSpecs(specOEMTable)
    callSpecs(specBlacklistTable)

})