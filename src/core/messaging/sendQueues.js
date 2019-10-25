'use strict'
const amqp = require('amqplib/callback_api')

const sendQueues = async (queueMsg = {}) => {

    await amqp.connect(queueMsg.url, function(error0, connection) {
        if (error0) {
            throw error0
        }

        connection.createChannel(function(error1, channel) {
            if (error1) {
                throw error1
            }

            for(var queue of queueMsg.queues){
                var key = queue.key
                var msg = queue.msg

                channel.assertQueue(key, {
                    durable: false
                })
    
                channel.sendToQueue(key, Buffer.from(msg));
                console.log(`Sent RabbitMQ Queue: ${msg}`);
            }
        })
        setTimeout(function() { 
            connection.close(); 
            process.exit(0) 
        }, 500);
    })
}

module.exports = {
    sendQueues
}
  
