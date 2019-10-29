'use strict'

const { actions } = require('../../../../core/action/actions')
const { breadcrumbsUI } = require('../../repo/breadcrumbs/breadcrumbsUI')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')

const validateCurrentBreadcrumb = async (breadcrumb = []) => {
  const steps = []

  steps.push(await StepBuilder().setControl(await breadcrumbsUI().breadCrumb)
    .setAction(await actions().waitUntilVisible)
    .build())

  steps.push(await StepBuilder().setControl(await breadcrumbsUI().breadCrumb)
    .setAction(await actions().isBreadcrumb)
    .setData([breadcrumb])
    .build())

  const scenario = await ScenarioBuilder().setName(`Valid is the Current Breadcrumb: ${breadcrumb}`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  validateCurrentBreadcrumb
}
