/**
 * @name sendGet
 */
'use strict'

let { MessageBuilder } = require('../../../../core/layer/MessageBuilder')
let { ResultBuilder } = require('../../../../core/result/ResultBuilder')

const request = require('superagent')

/**
 * @function sendGet
 * @description Send a Rest GET Request
 * 
 * @param {MessageBuilder} msg 
 */
let sendGet = async (msg = {}) => {

    const parent = msg.parent
    const step = msg.content
    const getReq = step.data
    var result = null

    console.log(`Send Get Request to: ${getReq.url}`)

    try{

        const req = await request.get(getReq.url)
                                .set('Content-Type', getReq.contentType)
                                .then((res) => {
                                    if(res.status != 200) throw new Error(`Resolution successfuly but not with status 200 : ${res.status}`)
                                    return res
                                })
                                .catch((err) => {
                                    console.log(`err: ${err}`)
                                    return err
                                });

        console.log(`Req Headers: ${JSON.stringify(req.headers)}`)

        result = await ResultBuilder().setParent(parent)
                                    .setDetails([`Action Successful: Send Get Request`])
                                    .setStatus('pass')
                                    .build()
    } catch (e) {
        result = await ResultBuilder().setParent(parent)
                                    .setDetails([`Action Failed: Send Get Request : ${e}`])
                                    .setStatus('fail')
                                    .build()
    }

    const resultMsg = await MessageBuilder().setParent(parent)
        .setContent(result)
        .build()

    return Object.freeze(resultMsg)
}

module.exports = {
    sendGet
}