'use strict'

const { cloneDeep } = require('lodash')
const { isValidStep } = require('./isValidStep')

/**
 * @description Builds an instance of a Step function, with the necessary properties for defining how a step should execute during a test.
 * @function StepBuilder
 * @method setIsDefaultSearch For future use. Once more search algorithms, based upon various techniques to enhance and refine our ability to locate a control in the UI, are defined
 * then this property will allows users to define which search algorithm they would like to use for this step. If the default search is not used it will use a named search.
 * @method setIsUi The default is true. This executes logic to interact with a GUI in the AUT, versus a service or a database. Execution flow control is different for each.
 * @method setIsRest The default is false. Use this when you want to execute a test step against a REST-based service. For instance, you call a service and extract a node's value
 * to be used later in your test or to ensure an update you made in the GUI is reflected from the back-end service.
 * @method setIsCustomAction This is when you have written some custom execution logic because the base actions will not efficiently test/validate something unique to your
 * situation.
 * @method setControl Control that has been defined in a repository function (factory function) that the step will use in conjunction with the action.
 * @method setAction The actual action you would like to perform against a control, service, database, or some other test artifact. Click, enter, exists, select, etc.
 * @method setData When used with most actions and controls it's the data that will be inserted into the user interface. When used in the scrape and compare actions then it's the name
 * of the property to be scraped and compared.
 * @method setTakeScreenshot If this is set to true then a screenshot will be taken when this step executes. Default is false but screenshots are taken when a step fails, regardless of what is specifed.
 * @method setStaticWait A static wait is a specified amount of time we want this step to wait before it executes. Specified in milliseconds.
 * @method setTimeout A unique timeout, in milliseconds, for this step. Generally the timeout is specified in the BDD framework or WebDriver, but sometimes one needs to override those settings.
 * @method setEndpoint If the step's "isRest" is set to true then an endpoint must be specified. Endpoints are usually configured in environment-specific configuration files, read in, then passed into a step.
 * @method setPersistResults Don't think this property is being used at this time and it may get deprecated.
 * @method setQuery If "isRest" and "isUI" are both false then the framework assumes you want to execute a database step and the query must be specified.
 * @method setDataParser Custom data parser to be used when parsing responses from REST services and queries. This is used to convert the results into dynamic test data for future reference.
 * @method setDataKey The dataKey is required when one wants to persist or compare data. When scraping or extracting data the dataKey is the key that will be used to persist the value
 * scraped our extracted into a key/value pair. When using the dataKey for comparing or validating then it's used to extract the value that was perviously cached.
 * @method setScraper This would be a custom scraper function used to extract a more complex value from a service, database, or UI. The main scraper only scrapes a single property value
 * for simple comparisons. But what happens when you want to extract the entire contents of a service call into a model or the contents of a table into an array of models for more complex
 * comparison? This is where a custom scraper (and a custom validator) come into play.
 * @method setValidator This is a custom validator fuction used to validate complex logic against the AUT. Maybe you need to execute validation of several values in a table, several nodes
 * in a JSON REST response, or several fields in a database. Maybe there's complex calculatons necessary for defining values to be compared. This is where a custom validator comes into play.
 * @method setSearch If isDefaultSearch is deliberately set to false then one needs to specify a custom search function to execute in place of the default search.
 * @method build Validates then builds an instance of a step. If errors are found then exceptions will be thrown.
 * @throws {Error} Throws several errors based upon the validation issues it encountered. For instance, if fields were set incorrectly then it will likely throw an error stating why it determined
 * the fields to be incorrectly set.
 * @returns {Step} build returns a frozen instance of a Step with all the properties to define the execution of that step.
 * @example
 * // Basic example with no data.
 *
 * // Basic example with data.
 *
 * // Scrape example.
 *
 * // Compare example.
 *
 * // REST example
 *
 * // Database example.
 */
const StepBuilder = () => {
  const step = {
    isDefaultSearch: true,
    isUi: true,
    isRest: false,
    isCustomAction: false,
    control: null,
    action: null,
    takeScreenshot: false,
    data: [],
    staticWait: 0,
    timeout: 10000,
    endpoint: null,
    persistResults: false,
    query: null,
    dataParser: null,
    dataKey: '',
    scraper: null,
    validator: null,
    search: ''
  }

  this.setIsDefaultSearch = (value = true) => {
    step.isDefaultSearch = value
    return this
  }

  this.setIsUi = (value = true) => {
    step.isUi = value
    return this
  }

  this.setIsRest = (value = false) => {
    step.isRest = value
    return this
  }

  this.setIsCustomAction = (value = false) => {
    step.isCustomAction = value
    return this
  }

  this.setControl = (value = {}) => {
    step.control = value
    return this
  }

  this.setAction = (value = {}) => {
    step.action = value
    return this
  }

  this.setData = (value = []) => {
    step.data = value
    return this
  }

  this.setTakeScreenshot = (value = false) => {
    step.takeScreenshot = value
    return this
  }

  this.setStaticWait = (value = 0) => {
    step.staticWait = value
    return this
  }

  this.setTimeout = (value = 10000) => {
    step.timeout = value
    return this
  }

  this.setEndpoint = (value = {}) => {
    step.endpoint = value
    return this
  }

  this.setPersistResults = (value = false) => {
    step.persistResults = value
    return this
  }

  this.setQuery = (value = {}) => {
    step.query = value
    return this
  }

  this.setDataParser = (value = {}) => {
    step.dataParser = value
    return this
  }

  this.setDataKey = (value = '') => {
    step.dataKey = value
    return this
  }

  this.setScraper = (value = {}) => {
    step.scraper = value
    return this
  }

  this.setValidator = (value = {}) => {
    step.validator = value
    return this
  }

  this.build = () => {
    const copy = cloneDeep(step)

    if (copy.isCustomAction === false) {
      const validationResult = isValidStep(copy)
      if (validationResult.isValid === false) throw new Error(validationResult.message)
    }

    return Object.freeze(copy)
  }

  return this
}

module.exports = {
  StepBuilder
}
