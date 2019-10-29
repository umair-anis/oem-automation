/**
 * @name sendPut
 */
'use strict'

let { MessageBuilder } = require('../../../../core/layer/MessageBuilder')
let { ResultBuilder } = require('../../../../core/result/ResultBuilder')

const request = require('superagent')

/**
 * @function sendPut
 * @description Send a Rest PUT Request
 * 
 * @param {MessageBuilder} msg 
 */
let sendPut = async (msg = {}) => {

    const parent = msg.parent
    var result = null

    try{

        const req = await request.put(`https://entity-service.qa.connectedfleet.io/faultlogs`)
                                .set('Content-Type', 'application/json')
                                .send()
                                .then((res) => {
                                    if(res.status != 200) throw new Error(`Resolution successfuly but not with status 200 : ${res.status}`)
                                    return res
                                })
                                .catch((err) => {
                                    console.log(`err: ${err}`)
                                    return err
                                });

        result = await ResultBuilder().setParent(parent)
                                    .setDetails([`Action Successful: Send Put Request`])
                                    .setStatus('pass')
                                    .build()
    } catch (e) {
        result = await ResultBuilder().setParent(parent)
                                    .setDetails([`Action Failed: Send Put Request : ${e}`])
                                    .setStatus('fail')
                                    .build()
    }

    const resultMsg = await MessageBuilder().setParent(parent)
        .setContent(result)
        .build()

    return Object.freeze(resultMsg)
}

module.exports = {
    sendPut
}