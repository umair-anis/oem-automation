'use strict'

const { actions } = require('../../../../core/action/actions')
const { breadcrumbsUI } = require('../../repo/breadcrumbs/breadcrumbsUI')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')

const clickBreadcrumbLink = async (linkName = []) => {
  const steps = []

  steps.push(await StepBuilder().setControl(await breadcrumbsUI().breadCrumb)
    .setAction(await actions().clickBreadcrumbLink)
    .setData(linkName)
    .build())

  const scenario = await ScenarioBuilder().setName(`Click Breadcrumb Link: ${linkName}`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickBreadcrumbLink
}
