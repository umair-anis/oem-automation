'use strict'
const amqp = require('amqplib/callback_api')

const recieveQueues = async (queueMsg = {}) => {

    await amqp.connect(queueMsg.url, function(error0, connection) {
        if (error0) {
            throw error0;
        }

        connection.createChannel(function(error1, channel) {
            if (error1) {
                throw error1;
            }

            for(var queue of queueMsg.queues){

                var key = queue.key

                channel.assertQueue(key, {
                    durable: false
                })
    
                console.log(`Waiting for RabbitMQ Queue: ${key}`)
    
                channel.consume(key, function(msg) {
                    console.log(`Received RabbitMQ Queue: ${msg.content.toString()}`)
                }, {
                    noAck: true
                })
            }
        })
    })
}

module.exports = {
    recieveQueues
}
