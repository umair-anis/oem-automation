'use strict'

let { getSaveButton } = require('../../customSearch/dealer/getSaveButton')
let { MessageBuilder } = require('../../../../core/layer/MessageBuilder')
let { ResultBuilder } = require('../../../../core/result/ResultBuilder')

let clickSaveButton = async (msg = {}) => {

    const step = msg.content
    const parent = msg.parent

    const buttons = await getSaveButton(msg)
    await buttons[step.control.property.path].click()

    await msg.parent.sleep(3000)

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
    clickSaveButton
}