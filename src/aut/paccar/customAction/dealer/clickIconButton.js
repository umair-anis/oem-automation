'use strict'

let { filterElementsByProperty } = require('../../customSearch/filterElementsByProperty')
let { getIconButtons } = require('../../customSearch/getIconButtons')
let { MessageBuilder } = require('../../../../core/layer/MessageBuilder')
let { ResultBuilder } = require('../../../../core/result/ResultBuilder')

let clickIconButton = async (msg = {}) => {

    const step = msg.content
    const parent = msg.parent

    const info = await getIconButtons(msg)
    const buttons = await filterElementsByProperty(info, step.control.property.name, step.control.property.path)
    await buttons[buttons.length - 1].click()

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
    clickIconButton
}