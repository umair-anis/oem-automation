'use strict'

const { cloneDeep } = require('lodash')
const { isValidBrowserName } = require('./isValidBrowserName')

/**
 * @description
 * @function BrowserBuilder
 * @method setName
 * @method setVersion
 * @method setCapabilities
 * @method setOptions
 * @method build
 * @returns {Browser}
 * @example
 */
const BrowserBuilder = (() => {
  const browser = {
    name: '',
    version: '',
    capabilities: null,
    options: null
  }

  this.setName = (value = '') => {
    browser.name = value
    return this
  }

  this.setVersion = (value = '') => {
    browser.version = value
    return this
  }

  this.setCapabilities = (value = {}) => {
    browser.capabilities = value
    return this
  }

  this.setOptions = (value = {}) => {
    browser.options = value
    return this
  }

  this.build = () => {
    const copy = cloneDeep(browser)
    const isValid = isValidBrowserName(browser.name)

    if (!isValid) throw new Error(`Invalid browser name has been specified: ${browser.name}.`)

    return Object.freeze(copy)
  }

  return this
})

module.exports = {
  BrowserBuilder
}
