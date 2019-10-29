'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDealersServiceCenters } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDealersServiceCenters')
const { buildEditDealer } = require('../../scenario/dealerServiceCenter/editDealer/buildEditDealer')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { DealerBuilder } = require('../../data/dealer/DealerBuilder')
const { GeofenceBuilder } = require('../../data/dealer/GeofenceBuilder')
const { LocationBuilder } = require('../../data/dealer/LocationBuilder')
const { PhoneNumberBuilder } = require('../../data/dealer/PhoneNumberBuilder')
const { HoursOfServiceBuilder } = require('../../data/dealer/HoursOfServiceBuilder')

const buildTestEditDealer_All = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const geofenceSteps = []
  const locationSteps = []
  const phoneNumberSteps = []
  const hoursOfServiceSteps = []

  // Add, Edit, then Delete a Geofence Coordinate
  geofenceSteps.push(await GeofenceBuilder().setFunction(`add`)
    .setLatitude(`12`)
    .setLongitude(`-12`)
    .build())
  geofenceSteps.push(await GeofenceBuilder().setFunction(`edit`)
    .setName(`Coordinate 8`)
    .setLatitude(`32`)
    .setLongitude(`-32`)
    .build())
  geofenceSteps.push(await GeofenceBuilder().setFunction(`delete`)
    .setName(`Coordinate 8`)
    .build())

  // Add, Edit, then Delete a Location
  locationSteps.push(await LocationBuilder().setFunction(`add`)
    .setAddressType(`New Address`)
    .setAddress1(`123 Cherry Lane`)
    .setAddress2(``)
    .setCity(`Prior Lake`)
    .setState(`MN`)
    .setZipCode(`55372`)
    .build())
  locationSteps.push(await LocationBuilder().setFunction(`edit`)
    .setAddressType(`New Address`)
    .setAddress1(`1234 Cherry Lane`)
    .setAddress2(`5678 Apt`)
    .setCity(`Savage`)
    .setState(`MN`)
    .setZipCode(`55378`)
    .build())
  locationSteps.push(await LocationBuilder().setFunction(`delete`)
    .setAddressType(`New Address`)
    .build())

  // Add, Edit, then Delete a Phone Number
  phoneNumberSteps.push(await PhoneNumberBuilder().setFunction(`add`)
    .setNumber(`(123) 456-7890`)
    .setPhoneType(`Fax`)
    .build())
  phoneNumberSteps.push(await PhoneNumberBuilder().setFunction(`edit`)
    .setNumber(`(123) 456-7890`)
    .setPhoneType(`Fax`)
    .build())
  phoneNumberSteps.push(await PhoneNumberBuilder().setFunction(`delete`)
    .setPhoneType(`Fax`)
    .build())

  // Add, Edit, then Delete a Hours of Service
  hoursOfServiceSteps.push(await HoursOfServiceBuilder().setFunction(`add`)
    .setServiceType(`My Test Service`)
    .setOpen(`08:00:00.000`)
    .setClose(`12:00:00.000`)
    .setDaysOfWeek([`Monday`, `Wednesday`, `Saturday`])
    .build())
  hoursOfServiceSteps.push(await HoursOfServiceBuilder().setFunction(`edit`)
    .setServiceType(`My Test Service`)
    .setOpen(`09:00:00.000`)
    .setClose(`10:00:00.000`)
    .setDaysOfWeek([`Monday`, `Tuesday`, `Thursday`])
    .build())
  hoursOfServiceSteps.push(await HoursOfServiceBuilder().setFunction(`delete`)
    .setServiceType(`My Test Service`)
    .build())

  const dealer = await DealerBuilder().setName(`AMG Peterbilt of Columbus - East`)
    .setEmail(``)
    .setID(`A651`)
    .setLatitude(`40.13060186`)
    .setLongitude(`-83.200663381`)
    .setGeofenceSteps(geofenceSteps)
    .setLocationSteps(locationSteps)
    .setPhoneNumberSteps(phoneNumberSteps)
    .setHoursOfServiceSteps(hoursOfServiceSteps)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDealersServiceCentersScenario = await clickDealersServiceCenters()
  const buildEditDealerScenario = await buildEditDealer(dealer)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDealersServiceCentersScenario,
    buildEditDealerScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Dealers - Edit Dealer: ${dealer.name} Everything in Dealer`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestEditDealer_All
}
