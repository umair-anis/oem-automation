'use strict'

const { isEmptyOrWhitespace } = require('../model/isEmptyOrWhitespace')
const { isNullOrUndefined } = require('../model/isNullOrUndefined')
const { StepValidationResult } = require('./StepValidationResult')

/**
 * @description
 * @function isValidStep
 * @param {Step} step
 * @throws {Error}
 * @throws {Error}
 * @throws {Error}
 * @returns {StepValidationResult}
 * @example
 */
const isValidStep = (step = {}) => {
  let isValid = true
  let message = ''

  try {
    const hasAction = checkForAction(step)
    const hasData = checkForData(step)

    if (hasAction === false) throw new Error(`The step's action is missing or invalid.`)
    if (step.isRest === true && step.isUi === true) throw new Error(`A step cannot be both a UI step and a REST step, one must be set to false.`)
    if (step.isRest === true && hasData === false) throw new Error(`A REST step must specify an endpoint in the data field.`)
    if (step.isRest === true && step.endpoint === null) throw new Error(`An endpoint must be specified if the step is a REST step.`)
    if (step.isUi === false && step.isRest === false && step.query === null) throw new Error(`If both isRest and isUi are set to false then a step is a database step and must have a query.`)
    if (step.isRest === true && step.persistResults === true && step.dataParser === null) throw new Error(`A REST step that will persist data for future use must have a data parser that converts results to an array.`)
    if (step.isRest === false && step.isUi === false && step.dataParser === null) throw new Error(`A query step that will persist data for future use must have a dataParser that converts the query results to an array.`)
    if (step.isUi === true && step.action.name !== 'open' && step.action.name !== 'close' && step.action.name !== 'navigate' && step.action.name !== 'forward' && step.action.name !== 'back' && step.action.name !== 'refresh' && step.action.name !== 'scrollDown' && step.action.name !== 'scrollUp' && step.action.name !== 'scrollLeft' && step.action.name !== 'srollRight' && step.action.name !== 'wait' && step.action.name !== 'validate' && step.control === null) throw new Error(`If the step is a UI step and it's not a brower-level action then the control must be specified.`)
    if (step.persistResults === true && step.dataKey.trim() === '') throw new Error(`If you are persisting results for future use then a dataKey must be specified.`)
    if (step.isUi === true && step.action.name === 'scrape' && step.control === null) throw new Error(`Must specify a control to scrape data from.`)
    if (step.isUi === true && step.action.name === 'scrape' && step.dataKey.trim() === '') throw new Error(`Must specify a data key when scraping data from the UI.`)
    if (step.scraper != null && step.validator === null) throw new Error(`Step validator must be defined if scraper is defined, and vice versa.`)
  } catch (e) {
    isValid = false
    message = `An exception was triggered while setting up a step: ${e.message} ${e.stack}.`
  }

  const result = StepValidationResult().setIsValid(isValid)
    .setMessage(message)
    .build()

  return Object.freeze(result)
}

const checkForAction = async (step = {}) => {
  let hasProperty = true

  try {
    const isMissing = await isNullOrUndefined(step.action)

    if (isMissing === true) hasProperty = false
  } catch (e) {
    hasProperty = false
  }

  return Object.freeze(hasProperty)
}

const checkForData = async (step = {}) => {
  let hasProperty = true

  try {
    const isDataEmpty = await isEmptyOrWhitespace(step.data)

    if (isDataEmpty === true) hasProperty = false
  } catch (e) {
    hasProperty = false
  }

  return Object.freeze(hasProperty)
}

module.exports = {
  isValidStep
}
