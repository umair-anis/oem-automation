'use strict'

const { actions } = require('../../../../core/action/actions')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { scrapeDealerEdit } = require('../../scrape/dealer/scrapeDealerEdit')
const { StepBuilder } = require('../../../../core/step/StepBuilder')
const { validateDealerEdit } = require('../../validator/validateDealerEdit')

const validateDealerEditPage = async (dealers = []) => {
  const steps = []

  steps.push(await StepBuilder().setValidator()
    .setScraper(scrapeDealerEdit)
    .setValidator(validateDealerEdit)
    .setData(dealers)
    .setAction(await actions().validate)
    .build())

  const scenario = await ScenarioBuilder().setName(`Validate Dealer Edit Page`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  validateDealerEditPage
}
