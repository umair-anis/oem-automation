'use strict'

const { cloneDeep } = require('lodash')
const { isEmptyOrWhitespace } = require('../model/isEmptyOrWhitespace')

/**
 * @description
 * @function EnvironmentBuilder
 * @method setName
 * @method setIsRemote
 * @method setIsSauceLabs
 * @method setRemoteUrl
 * @method createBaselineScreenshots
 * @method baselinePath
 * @method compareScreenshots
 * @method screenshotOnFailure
 * @method screenshotPath
 * @build
 * @returns {Environment}
 * @example
 */
const EnvironmentBuilder = (() => {
  const environment = {
    name: '',
    isRemote: false,
    isSauceLabs: false,
    remoteUrl: '',
    createBaselineScreenshots: false,
    baselinePath: '',
    compareScreenshots: false,
    screenshotOnFailure: false,
    screenshotPath: ''
  }

  this.setName = (value = '') => {
    environment.name = value
    return this
  }

  this.setIsRemote = (value = false) => {
    environment.isRemote = value
    return this
  }

  this.setIsSauceLabs = (value = false) => {
    environment.isSauceLabs = value
    return this
  }

  this.setRemoteUrl = (value = '') => {
    environment.remoteUrl = value
    return this
  }

  this.setCreateBaselineScreenshots = (value = false) => {
    environment.createBaselineScreenshots = value
    return this
  }

  this.setBaselinePath = (value = '') => {
    environment.baselinePath = value
    return this
  }

  this.setCompareScreenshots = (value = false) => {
    environment.compareScreenshots = value
    return this
  }

  this.setScreenshotOnFailure = (value = false) => {
    environment.screenshotOnFailure = value
    return this
  }

  this.setScreenshotPath = (value = '') => {
    environment.screenshotPath = value
    return this
  }

  this.build = (envNameValidator = {}) => {
    const copy = cloneDeep(environment)

    const isNameEmpty = isEmptyOrWhitespace(environment.name)
    if (isNameEmpty) throw new Error(`Environment name cannot be empty or whitespace.`)

    const isValidName = envNameValidator(environment)
    if (!isValidName) throw new Error(`An invalid name has been specified for the environment: ${environment.name}.`)

    const isRemote = environment.isRemote
    const isSauceLabs = environment.isSauceLabs
    const remoteUrl = environment.remoteUrl
    const isRemoteUrlEmpty = isEmptyOrWhitespace(remoteUrl)

    if (isRemote && isSauceLabs) throw new Error(`Execution within an environment must be either SauceLabs or remote, it cannot be both.`)
    if (isRemote || isSauceLabs) {
      if (isRemoteUrlEmpty) throw new Error(`Remote URL cannot be empty when doing remote or SauceLabs execution.`)
    }

    return Object.freeze(copy)
  }

  return this
})

module.exports = {
  EnvironmentBuilder
}
