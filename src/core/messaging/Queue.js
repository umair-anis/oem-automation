'use strict'

/**
 * @name Queue
 * @description Contains the information for a single queue
 */
const Queue = (() => {

  const queue = {
    key: '',
    msg: ''
  }

  this.setKey = (value = '') => {
    queue.key = value
    return this
  }

  this.setMsg = (value = '') => {
    queue.msg = value
    return this
  }

  this.build = async () => {
    return Object.freeze(queue)
  }

  return this
})

module.exports = {
    Queue
}
