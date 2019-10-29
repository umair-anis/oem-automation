'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

const { testDOGPagination } = require('../../test/pagination/testDOGPagination')
const { testDealerPagination } = require('../../test/pagination/testDealerPagination')
const { testCustomerPagination } = require('../../test/pagination/testCustomerPagination')
const { testUserPagination } = require('../../test/pagination/testUserPagination')
const { testSubscriptionPagination } = require('../../test/pagination/testSubscriptionPagination')
const { testOTASubscriptionPagination } = require('../../test/pagination/testOTASubscriptionPagination')
const { testDeviceCollectionPagination } = require('../../test/pagination/testDeviceCollectionPagination')
const { testDevicesPagination } = require('../../test/pagination/testDevicesPagination')
const { testRemoteDiagnosticsPagination } = require('../../test/pagination/testRemoteDiagnosticsPagination')

describe(`Pagination - All Page Changes and Dropdowns`, () => {

  const specDOG = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Pagination - All Page Changes and Dropdowns - Dealer Owner Groups Table`)
                                            .setTestFunc(testDOGPagination)
                                            .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`, `kenmexpaccaradmin`, `kenmexsuperadmin`, `paccaradmin`, `paccaruser`, `paccarpoweruser`, 
                                                                `divisionuser`, `divisionuser1`, `dealerowneradmin`, `dealerowneruser`, `dealerpoweruser`, `dealerregionadmin`, `dealerregionuser`, `dealeradmin`, `dealeruser`, 
                                                                `dealertech`, `spanishUser`] )
                                            .build()

  const specDealer = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Pagination - All Page Changes and Dropdowns - Dealer Service Centers Table`)
                                            .setTestFunc(testDealerPagination)
                                            .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`, `kenmexpaccaradmin`, `kenmexsuperadmin`, `paccaradmin`, `paccaruser`, `paccarpoweruser`, 
                                                                `divisionuser`, `divisionuser1`, `dealerowneradmin`, `dealerowneruser`, `dealerpoweruser`, `dealerregionadmin`, `dealerregionuser`, `dealeradmin`, `dealeruser`, 
                                                                `dealertech`, `spanishUser`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                            .build()

  const specCustomer = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Pagination - All Page Changes and Dropdowns - Customers Table`)
                                            .setTestFunc(testCustomerPagination)
                                            .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`, `kenmexpaccaradmin`, `kenmexsuperadmin`, `paccaradmin`, `paccaruser`, `paccarpoweruser`, 
                                                                `divisionuser`, `divisionuser1`, `dealerowneradmin`, `dealerowneruser`, `dealerpoweruser`, `dealerregionadmin`, `dealerregionuser`, `dealeradmin`, `dealeruser`, 
                                                                `dealertech`, `spanishUser`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                            .build()

  const specUser = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Pagination - All Page Changes and Dropdowns - Users Table`)
                                            .setTestFunc(testUserPagination)
                                            .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`, `kenmexpaccaradmin`, `kenmexsuperadmin`, `paccaradmin`, `paccaruser`, `paccarpoweruser`, 
                                                                `divisionuser`, `divisionuser1`, `dealerowneradmin`, `dealerowneruser`, `dealerpoweruser`, `dealerregionadmin`, `dealerregionuser`, `dealeradmin`, `dealeruser`, 
                                                                `dealertech`, `spanishUser`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                            .build()

  /*const specVehicle = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Pagination - All Page Changes and Dropdowns - Vehicles Table`)
                                            .setTestFunc(testv)
                                            .setPassingRoles( [`paccaradmin`] )
                                            .build()*/

  const specSubscription = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Pagination - All Page Changes and Dropdowns - Subscrptions Table`)
                                            .setTestFunc(testSubscriptionPagination)
                                            .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`, `kenmexpaccaradmin`, `kenmexsuperadmin`, `paccaradmin`, `dealerowneradmin`, `dealerregionadmin`, `dealeradmin`, `spanishUser`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`] )
                                            .build()

  const specOTASubscription = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Pagination - All Page Changes and Dropdowns - OTA Subscrptions Table`)
                                            .setTestFunc(testOTASubscriptionPagination)
                                            .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`, `kenmexpaccaradmin`, `kenmexsuperadmin`, `paccaradmin`, `spanishUser`] )
                                            .build()

  const specDeviceCollection = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Pagination - All Page Changes and Dropdowns - Device Collections Table`)
                                            .setTestFunc(testDeviceCollectionPagination)
                                            .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`, `kenmexsuperadmin`, `spanishUser`] )
                                            .build()

  const specDevices = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Pagination - All Page Changes and Dropdowns - Devices Table`)
                                            .setTestFunc(testDevicesPagination)
                                            .setPassingRoles( [`otaTestAdmin`, `peoplenetadmin`, `kenmexsuperadmin`, `spanishUser`] )
                                            .build()

  const specRemoteDiag = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Pagination - All Page Changes and Dropdowns - Remote Diagnostics Table`)
                                            .setTestFunc(testRemoteDiagnosticsPagination)
                                            .setPassingRoles( [`otaTestAdmin`, `kenmexsuperadmin`, `peoplenetadmin`, `spanishUser`, `paccaradmin`] )
                                            .build()

  callSpecs(specDOG)
  callSpecs(specDealer)
  callSpecs(specCustomer)
  callSpecs(specUser)
  callSpecs(specSubscription)
  callSpecs(specOTASubscription)
  callSpecs(specDeviceCollection)
  callSpecs(specDevices)
  callSpecs(specRemoteDiag)
})
