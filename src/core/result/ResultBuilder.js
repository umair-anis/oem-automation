'use strict'

const { cloneDeep } = require('lodash')
const { isEmptyOrWhitespace } = require('../model/isEmptyOrWhitespace')
const { isValidStatus } = require('./isValidStatus')

/**
 * @description
 * @function ResultBuilder
 * @method setStatus
 * @method setDetails
 * @method setStartTime
 * @method setEndTime
 * @method setTotalTime
 * @method setParent
 * @method setChild
 * @method setData
 * @method setDynamicData
 * @method build
 * @returns {Result}
 * @example
 */
const ResultBuilder = (() => {
  const result = {
    status: '',
    details: [],
    startTime: null,
    endTime: null,
    totalTime: 0,
    parent: null,
    child: null,
    data: null,
    dynamicData: []
  }

  this.setStatus = (value = '') => {
    result.status = value
    return this
  }

  this.setDetails = (value = []) => {
    result.details = value
    return this
  }

  this.setStartTime = (value = 0) => {
    result.startTime = value
    return this
  }

  this.setEndTime = (value = 0) => {
    result.endTime = value
    return this
  }

  this.setParent = (value = {}) => {
    result.parent = value
    return this
  }

  this.setChild = (value = {}) => {
    result.child = value
    return this
  }

  this.setData = (value = {}) => {
    result.data = value
    return this
  }

  this.setDynamicData = (values = []) => {
    result.dynamicData = values
    return this
  }

  this.build = async () => {

    const status = result.status.toLowerCase()
    const isEmpty = await isEmptyOrWhitespace(status)
    const isStatusValid = await isValidStatus(status)

    if (isEmpty) throw new Error(`Status cannot be empty or whitespace.`)
    if (isStatusValid) throw new Error(`Invalid status: ${status} specified in ResultBuilder.`)

    const copy = await cloneDeep(result)
    return Object.freeze(copy)
  }

  return this
})

module.exports = {
  ResultBuilder
}
