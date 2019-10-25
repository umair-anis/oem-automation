'use strict'
let { Queue } = require('./src/core/messaging/Queue')
let { QueueMessageBuilder } = require('./src/core/messaging/QueueMessageBuilder')

let { sendQueues } = require('./src/core/messaging/sendQueues')
let { recieveQueues } = require('./src/core/messaging/recieveQueues')

const run = (async() => {

    const queue1 = await Queue().setKey(`hello`)
                                .setMsg(`Hello World`)
                                .build()

    const queue2 = await Queue().setKey(`name`)
                                .setMsg(`avery automation test`)
                                .build()

    const queues = [queue1, queue2]

    const queueMsg = await QueueMessageBuilder().setURL(`amqp://localhost`)
                                                .setQueues(queues)
                                                .build()

    await sendQueues(queueMsg)
    await recieveQueues(queueMsg)
    
})()

Promise.all([run])
