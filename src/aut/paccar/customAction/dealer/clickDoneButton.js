'use strict'

let { getDoneButtons } = require('../../customSearch/dealer/getDoneButtons')
let { MessageBuilder } = require('../../../../core/layer/MessageBuilder')
let { ResultBuilder } = require('../../../../core/result/ResultBuilder')

let clickDoneButton = async (msg = {}) => {

    const step = msg.content
    const parent = msg.parent

    const buttons = await getDoneButtons(msg)
    await buttons[step.control.property.path].click()

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
    clickDoneButton
}