'use strict'

const { actions } = require('../../../../../core/action/actions')
const { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../core/step/StepBuilder')

const scrapeVehicleData = async (firmwareVersion = []) => {
  const steps = []

  steps.push(await StepBuilder().setControl(await vehiclesUI().pmgFirmwareData)
    .setAction(await actions().wait)
    .build())

  steps.push(await StepBuilder().setControl(await vehiclesUI().pmgFirmwareData)
    .setAction(await actions().scrape)
    .setDataKey('text')
    .setData(['outerText'])
    .build())



  const scenario = await ScenarioBuilder().setName(`Scrape firmware Version: ${firmwareVersion}`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  scrapeVehicleData
}
