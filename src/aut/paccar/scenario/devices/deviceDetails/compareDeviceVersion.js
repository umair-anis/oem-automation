'use strict'

let { actions } = require('../../../../../core/action/actions')
let { devicesUI } = require('../../../repo/portalSideNavigation/devices/devicesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let compareDeviceVersion = async () => {

  let steps = []

  steps.push(await StepBuilder().setControl(await devicesUI().deviceVersionData)
    .setAction(await actions().wait)
    .build())

  steps.push(await StepBuilder().setControl(await devicesUI().deviceVersionData)
    .setAction(await actions().compare)
    .setDataKey('text')
    .setData(['outerText'])
    .build())

  const scenario = await ScenarioBuilder().setName(`Compare device version`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  compareDeviceVersion
}
