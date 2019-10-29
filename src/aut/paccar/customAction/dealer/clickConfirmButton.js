'use strict'

let { filterElementsByProperty } = require('../../customSearch/filterElementsByProperty')
let { getConfirmButtons } = require('../../customSearch/getConfirmButtons')
let { MessageBuilder } = require('../../../../core/layer/MessageBuilder')
let { ResultBuilder } = require('../../../../core/result/ResultBuilder')

let clickConfirmButton = async (msg = {}) => {

    const step = msg.content
    const parent = msg.parent

    const buttonInfo = await getConfirmButtons(msg)
    const filteredButton = await filterElementsByProperty(buttonInfo, step.control.property.name, step.control.property.path)
    await filteredButton.click()

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
    clickConfirmButton
}