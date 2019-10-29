'use strict'

const { clickDealerCheckbox } = require('../../../scenario/dealerServiceCenter/clickDealerCheckbox')
const { clickSelectedEdit } = require('../../../scenario/dealerServiceCenter/clickSelectedEdit')
const { buildAddCoordinate } = require('./geofences/buildAddCoordinate')
const { buildDeleteCoordinate } = require('./geofences/buildDeleteCoordinate')
const { buildEditCoordinate } = require('./geofences/buildEditCoordinate')
const { buildAddLocation } = require('./locations/buildAddLocation')
const { buildDeleteLocation } = require('./locations/buildDeleteLocation')
const { buildEditLocation } = require('./locations/buildEditLocation')
const { buildAddPhone } = require('./phoneNumbers/buildAddPhone')
const { buildDeletePhone } = require('./phoneNumbers/buildDeletePhone')
const { buildEditPhone } = require('./phoneNumbers/buildEditPhone')
const { buildAddHoursOfService } = require('./hoursOfService/buildAddHoursOfService')
const { buildDeleteHoursOfService } = require('./hoursOfService/buildDeleteHoursOfService')
const { buildEditHoursOfService } = require('./hoursOfService/buildEditHoursOfService')
const { validateDealerEditPage } = require('../validateDealerEditPage')
const { clickSaveDealer } = require('./clickSaveDealer')
const { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

const buildEditDealer = async (dealer = {}) => {
  // Go To Edit Dealer
  const clickDealerCheckboxScenario = await clickDealerCheckbox(dealer.name)
  const clickSelectedEditScenario = await clickSelectedEdit()

  // Edit Dealer Attributes
  const clickSaveDealerScenario = await clickSaveDealer()

  const scenarios = [clickDealerCheckboxScenario, clickSelectedEditScenario]

  // Add Geofence Steps
  for (const geofenceStep of dealer.geofenceSteps) {
    if (geofenceStep.function === `add`) {
      scenarios.push(await buildAddCoordinate(geofenceStep))
    } else if (geofenceStep.function === `edit`) {
      scenarios.push(await buildEditCoordinate(geofenceStep))
    } else if (geofenceStep.function === `delete`) {
      scenarios.push(await buildDeleteCoordinate(geofenceStep.name))
    }
  }

  // Add Location Steps
  for (const locationStep of dealer.locationSteps) {
    if (locationStep.function === `add`) {
      scenarios.push(await buildAddLocation(locationStep))
    } else if (locationStep.function === `edit`) {
      scenarios.push(await buildEditLocation(locationStep))
    } else if (locationStep.function === `delete`) {
      scenarios.push(await buildDeleteLocation(locationStep))
    }
  }

  // Add Phone Number Steps
  for (const phoneNumberStep of dealer.phoneNumberSteps) {
    if (phoneNumberStep.function === `add`) {
      scenarios.push(await buildAddPhone(phoneNumberStep))
    } else if (phoneNumberStep.function === `edit`) {
      scenarios.push(await buildEditPhone(phoneNumberStep))
    } else if (phoneNumberStep.function === `delete`) {
      scenarios.push(await buildDeletePhone(phoneNumberStep))
    }
  }

  // Add Hours of Servie Steps
  for (const hoursOfServiceStep of dealer.hoursOfServiceSteps) {
    if (hoursOfServiceStep.function === `add`) {
      scenarios.push(await buildAddHoursOfService(hoursOfServiceStep))
    } else if (hoursOfServiceStep.function === `edit`) {
      scenarios.push(await buildEditHoursOfService(hoursOfServiceStep))
    } else if (hoursOfServiceStep.function === `delete`) {
      scenarios.push(await buildDeleteHoursOfService(hoursOfServiceStep))
    }
  }

  //scenarios.push(await validateDealerEditPage([dealer]))
  scenarios.push(clickSaveDealerScenario)
  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName(`Edit Dealer: ${dealer.name}`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildEditDealer
}
