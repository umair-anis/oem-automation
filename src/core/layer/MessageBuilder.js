'use strict'

/**
 * @description
 * @function MessageBuilder
 * @method setContent
 * @method setParent
 * @method setChild
 * @method build
 * @returns {Message}
 * @example
 */
const MessageBuilder = (() => {
  const message = {
    content: null,
    parent: null,
    child: null,
    dynamicData: null,
    updatedIterations: 0
  }

  this.setContent = (value = {}) => {
    message.content = value
    return this
  }

  this.setParent = (value = {}) => {
    message.parent = value
    return this
  }

  this.setChild = (value = {}) => {
    message.child = value
    return this
  }

  this.setDynamicData = (value = []) => {
    message.dynamicData = value
    return this
  }

  this.setUpdatedIterations = (value = 0) => {
    message.updatedIterations = value
    return this
  }

  this.build = () => {
    return message
  }

  return this
})

module.exports = {
  MessageBuilder
}
