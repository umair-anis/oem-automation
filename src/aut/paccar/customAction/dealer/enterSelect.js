'use strict'

let { filterElementsByProperty } = require('../../customSearch/filterElementsByProperty')
let { getCurrentIterationData } = require('../../../../core/iteration/getCurrentIterationData')
let { getMdSelects } = require('../../customSearch/dealer/getMdSelects')
let { MessageBuilder } = require('../../../../core/layer/MessageBuilder')
let { ResultBuilder } = require('../../../../core/result/ResultBuilder')

let enterSelect = async (msg = {}) => {

    const step = msg.content
    const parent = msg.parent
    const currentData = await getCurrentIterationData(msg)

    const selects = await getMdSelects(msg)
    const elements = await filterElementsByProperty(selects, step.control.property.name, step.control.property.path)

    await elements[elements.length - 1].sendKeys(currentData)

    const result = await ResultBuilder().setParent(parent)
                                        .setDetails([`Successfully entered: ${currentData} into: ${step.control.name}.`])
                                        .setStatus('pass')
                                        .build()

    const resultMsg = await MessageBuilder().setParent(parent)
                                            .setContent(result)
                                            .build()

    return Object.freeze(resultMsg)
}

module.exports = {
    enterSelect
}