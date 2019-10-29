'use strict'

let { getDealerAddButtons } = require('../../customSearch/dealer/getDealerAddButtons')
let { MessageBuilder } = require('../../../../core/layer/MessageBuilder')
let { ResultBuilder } = require('../../../../core/result/ResultBuilder')

let clickDealerEditMainButton = async (msg = {}) => {

    const step = msg.content
    const parent = msg.parent

    await parent.sleep(1000)

    const buttons = await getDealerAddButtons(msg)
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
    clickDealerEditMainButton
}