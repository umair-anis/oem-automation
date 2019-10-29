'use strict'

const { actions } = require('../../../../core/action/actions')
const { blacklistUI } = require('../../repo/portalSideNavigation/blacklist/blacklistUI')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')

const validateCreateBlacklistError = async () => {
  const steps = []

  steps.push(await StepBuilder().setControl(await blacklistUI().buttonAddBlacklist)
    .setAction(await actions().click)
    .build())

  steps.push(await StepBuilder().setControl(await blacklistUI().buttonAddBlacklistSave)
    .setAction(await actions().click)
    .build())

  steps.push(await StepBuilder().setControl(await blacklistUI().promptAddedError)
    .setAction(await actions().waitUntilVisible)
    .build())

  const scenario = await ScenarioBuilder().setName('Validate Error Adding Blacklist')
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
    validateCreateBlacklistError
}
