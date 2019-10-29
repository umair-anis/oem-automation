'use strict'

let { getMainCancelButton } = require('../../customSearch/dealer/getMainCancelButton')
let { MessageBuilder } = require('../../../../core/layer/MessageBuilder')
let { ResultBuilder } = require('../../../../core/result/ResultBuilder')

let clickMainCancelButton = async (msg = {}) => {

    const step = msg.content
    const parent = msg.parent

    const info = await getMainCancelButton(msg)
    await info[step.control.property.path].element.click()

    await parent.sleep(2000)

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
    clickMainCancelButton
}