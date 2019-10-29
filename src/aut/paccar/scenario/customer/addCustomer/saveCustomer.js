'use strict'

const { actions } = require('../../../../../core/action/actions')
const { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
const { alertsUI } = require('../../../repo/alerts/alertsUI')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../core/step/StepBuilder')

/**
 * Build a scenario for click saveBtn
 * @returns Scenario
 */
const saveCustomer = async (pressSimilarSaveButton = true) => {
  const steps = []

  steps.push(await StepBuilder().setControl(await customersUI().saveBtn)
    .setAction(await actions().click)
    .build())
  if (pressSimilarSaveButton) {
    steps.push(await StepBuilder().setControl(await customersUI().similarSaveBtn)
      .setAction(await actions().wait)
      .setStaticWait(2000)
      .build())

    steps.push(await StepBuilder().setControl(await customersUI().similarSaveBtn)
      .setAction(await actions().click)
      .build())
  }
  steps.push(await StepBuilder().setControl(await customersUI().toastAlert)
    .setAction(await actions().wait)
    .setStaticWait(2000)
    .build())

  steps.push(await StepBuilder().setControl(await customersUI().toastAlert)
    .setAction(await actions().contains)
    .setData(['has been saved'])
    .build())

  steps.push(await StepBuilder().setControl(await customersUI().toastAlert)
    .setAction(await actions().validateUrl)
    .setData(['/#/nav/customer/details/peoplenet:customer'])
    .build())

  steps.push(await StepBuilder().setControl(await alertsUI().toastAlert)
    .setAction(await actions().waitToDisappear)
    .setStaticWait(10000)
    .build())

  const scenario = await ScenarioBuilder().setName('Click Save Customer button')
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  saveCustomer
}
