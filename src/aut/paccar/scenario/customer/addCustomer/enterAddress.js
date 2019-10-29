'use strict'

const { actions } = require('../../../../../core/action/actions')
const { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../core/step/StepBuilder')

const enterAddress = async (address1 = [], address2 = [], city = [], state = [], zipCode = []) => {
  const steps = []

  steps.push(await StepBuilder().setControl(await customersUI().fieldAddress1)
    .setAction(await actions().enter)
    .setData(address1)
    .build())

  steps.push(await StepBuilder().setControl(await customersUI().fieldAddress2)
    .setAction(await actions().enter)
    .setData(address2)
    .build())

  steps.push(await StepBuilder().setControl(await customersUI().fieldCity)
    .setAction(await actions().enter)
    .setData(city)
    .build())

  steps.push(await StepBuilder().setControl(await customersUI().dropdownState)
    .setAction(await actions().select)
    .setData(state)
    .build())

  steps.push(await StepBuilder().setControl(await customersUI().fieldZipCode)
    .setAction(await actions().enter)
    .setData(zipCode)
    .build())

  const scenario = await ScenarioBuilder().setName('Enter Addresses, City, State, ZipCode')
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  enterAddress
}
