'use strict'

const { actions } = require('../../../../../../core/action/actions')
const { dealerServiceCenterUI } = require('../../../../repo/dealerServiceCenter/dealerServiceCenterUI')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../../core/step/StepBuilder')

const { buildElement } = require('../../../../../../core/element/buildElement')

const clickDeleteCoordinate = async (coordinate = []) => {
  const steps = []

  const deleteButton = buildElement(`deleteButton`, `xpath`, `//div[@ng-hide="$ctrl.editingGeofence === coordinates"]//h2[contains(text(), "${coordinate}")]/../../..//button[2]`)
  steps.push(await StepBuilder().setControl(await deleteButton)
    .setAction(await actions().click)
    .build())

  steps.push(await StepBuilder().setControl(await dealerServiceCenterUI().buttonConfirmButton)
    .setAction(await actions().click)
    .build())

  const scenario = await ScenarioBuilder().setName(`Click Delete Coordinate: ${coordinate}`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickDeleteCoordinate
}
