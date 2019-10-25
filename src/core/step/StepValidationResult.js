'use strict'

const { cloneDeep } = require('lodash')

/**
 * @description
 * @function StepValidationResult
 * @method setIsValid
 * @method setMessage
 * @method build
 * @returns {ValidationResult}
 * @example
 */
const StepValidationResult = (() => {
  const validationResult = {
    isValid: true,
    message: ''
  }

  this.setIsValid = (value = true) => {
    validationResult.isValid = value
    return this
  }

  this.setMessage = (value = '') => {
    validationResult.message = value
    return this
  }

  this.build = () => {
    const copy = cloneDeep(validationResult)
    return Object.freeze(copy)
  }

  return this
})

module.exports = {
  StepValidationResult
}
