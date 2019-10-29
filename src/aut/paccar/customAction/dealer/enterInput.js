'use strict'

const { filterElementsByProperty } = require('../../customSearch/filterElementsByProperty')
const { getCurrentIterationData } = require('../../../../core/iteration/getCurrentIterationData')
const { getInputs } = require('../../customSearch/dealer/getInputs')
const { MessageBuilder } = require('../../../../core/layer/MessageBuilder')
const { ResultBuilder } = require('../../../../core/result/ResultBuilder')

const enterInput = async (msg = {}) => {

    const step = msg.content
    const parent = msg.parent
    const currentData = await getCurrentIterationData(msg)

    const inputs = await getInputs(msg)
    const elements = await filterElementsByProperty(inputs, step.control.property.name, step.control.property.path)

    const child = await elements[elements.length - 1]
    child.sendKeys(currentData)

    const result = await ResultBuilder().setParent(parent)
        .setChild(child)
        .setDetails([`Successfully entered: ${currentData} into: ${step.control.name}.`])
        .setStatus('pass')
        .build()

    const resultMsg = await MessageBuilder().setParent(parent)
        .setChild(child)
        .setContent(result)
        .build()

    return Object.freeze(resultMsg)
}

module.exports = {
    enterInput
}