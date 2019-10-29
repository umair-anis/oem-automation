/**
 * @name sendPost
 */
'use strict'

let { MessageBuilder } = require('../../../../core/layer/MessageBuilder')
let { ResultBuilder } = require('../../../../core/result/ResultBuilder')

const request = require('superagent')

/**
 * @function sendPost
 * @description Send a Rest POST Request
 * 
 * @param {MessageBuilder} msg 
 */
let sendPost = async (msg = {}) => {

    const parent = msg.parent
    const step = msg.content
    const postReq = step.data
    var result = null

    console.log(`Send Post Request to: ${postReq.url}`)

    try{

        const req = await request.post(postReq.url)
                                .set('Content-Type', postReq.contentType)
                                .send(postReq.data)
                                .then((res) => {
                                    if(res.status != 200) throw new Error(`Resolution successfuly but not with status 200 : ${res.status}`)
                                    return res
                                })
                                .catch((err) => {
                                    console.log(`err: ${err}`)
                                    return err
                                });

        result = await ResultBuilder().setParent(parent)
                                    .setDetails([`Action Successful: Send Post Request`])
                                    .setStatus('pass')
                                    .build()
    } catch (e) {
        result = await ResultBuilder().setParent(parent)
                                    .setDetails([`Action Failed: Send Post Request : ${e}`])
                                    .setStatus('fail')
                                    .build()
    }

    const resultMsg = await MessageBuilder().setParent(parent)
        .setContent(result)
        .build()

    return Object.freeze(resultMsg)
}

module.exports = {
    sendPost
}