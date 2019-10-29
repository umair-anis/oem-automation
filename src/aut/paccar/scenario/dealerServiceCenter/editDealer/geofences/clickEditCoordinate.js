'use strict'

const { actions } = require('../../../../../../core/action/actions')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../../core/step/StepBuilder')

const { buildElement } = require('../../../../../../core/element/buildElement')

const clickEditCoordinate = async (coordinate = []) => {
  const steps = []

  const editButton = buildElement(`editButton`, `xpath`, `//div[@ng-hide="$ctrl.editingGeofence === coordinates"]//h2[contains(text(), "${coordinate}")]/../../..//button[1]`)
  steps.push(await StepBuilder().setControl(await editButton)
    .setAction(await actions().click)
    .build())

  const scenario = await ScenarioBuilder().setName(`Click Edit Coordinate: ${coordinate}`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickEditCoordinate
}
