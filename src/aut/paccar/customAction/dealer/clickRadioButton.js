'use strict'

let { getMdRadioButtons } = require('../../customSearch/dealer/getMdRadioButtons')
let { MessageBuilder } = require('../../../../core/layer/MessageBuilder')
let { ResultBuilder } = require('../../../../core/result/ResultBuilder')

let clickRadioButton = async (msg = {}) => {

    const step = msg.content
    const parent = msg.parent
    const re = new RegExp(`${step.control.property.path}`)

    const radioButtons = await getMdRadioButtons(msg)

    let elements = []

    for (const radioButton of radioButtons) {

        if (radioButton.value.match(re)) {
            await elements.push(radioButton.element)
        }
    }

    await elements[elements.length - 1].click()

    const result = await ResultBuilder().setParent(parent)
                                        .setDetails([`Successfully clicked: ${step.control.name}.`])
                                        .setStatus('pass')
                                        .build()

    const resultMsg = await MessageBuilder().setParent(parent)
                                            .setContent(result)
                                            .build()

    return Object.freeze(resultMsg)
}

module.exports = {
    clickRadioButton
}