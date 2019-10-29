'use strict'

let { getDoneButtons } = require('../../customSearch/dealer/getDoneButtons')
let { MessageBuilder } = require('../../../../core/layer/MessageBuilder')
let { ResultBuilder } = require('../../../../core/result/ResultBuilder')
let { SHIFT, TAB, chord} = require('selenium-webdriver').Key

let tabBackFromDoneButton = async (msg = {}) => {

    const parent = msg.parent
    const step = msg.content
    const sequence = chord(SHIFT, TAB)

    const buttons = await getDoneButtons(msg)
    await buttons[step.control.property.path].sendKeys(sequence)

    const result = await ResultBuilder().setParent(parent)
                                        .setDetails([`Successfully performed a SHIFT+TAB on ${step.control.name}.`])
                                        .setStatus('pass')
                                        .build()

    const resultMsg = await MessageBuilder().setParent(parent)
                                            .setContent(result)
                                            .build()

    return Object.freeze(resultMsg)
}

module.exports = {
    tabBackFromDoneButton
}