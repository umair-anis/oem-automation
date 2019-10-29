'use strict'

let { getCancelButtons } = require('../../customSearch/dealer/getCancelButtons')
let { MessageBuilder } = require('../../../../core/layer/MessageBuilder')
let { ResultBuilder } = require('../../../../core/result/ResultBuilder')

let clickCancelButton = async (msg = {}) => {

    const step = msg.content
    const parent = msg.parent

    const info = await getCancelButtons(msg)
    await info[step.control.property.path].element.click()

    const result = await ResultBuilder().setParent(parent)
        .setDetails([`Successfully clicked ${step.control.name}.`])
        .setStatus('pass')
        .build()

    const resultMsg = await MessageBuilder().setParent(parent)
        .setContent(result)
        .build()

    return Object.freeze(resultMsg)
}

module.exports = {
    clickCancelButton
}