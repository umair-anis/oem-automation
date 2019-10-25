'use strict'

/**
 * @name QueueMessageBuilder
 * @description Contains the information for a list of queues to be sent across a RabbitMQ AMQP protocol
 */
const QueueMessageBuilder = (() => {

  const queueMsg = {
    url: '',
    queues: []
  }

  this.setURL = (value = '') => {
    queueMsg.url = value
    return this
  }

  this.setQueues = (value = []) => {
    queueMsg.queues = value
    return this
  }

  this.build = async () => {
    return Object.freeze(queueMsg)
  }

  return this
})

module.exports = {
    QueueMessageBuilder
}
