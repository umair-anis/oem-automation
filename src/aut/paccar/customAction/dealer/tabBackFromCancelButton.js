'use strict'

const { getSecondaryButtons } = require('../../customSearch/getSecondaryButtons')
const { MessageBuilder } = require('../../../../core/layer/MessageBuilder')
const { ResultBuilder } = require('../../../../core/result/ResultBuilder')
const { SHIFT, TAB, chord } = require('selenium-webdriver').Key

const tabBackFromCancelButton = async (msg = {}) => {
  const parent = msg.parent
  const step = msg.content
  const sequence = chord(SHIFT, TAB)

  const data = await getSecondaryButtons(msg)

  let button = {}

  for (const currentData of data) {
    if (step.control.property.path === currentData.ngClick) {
      button = currentData.element
    }
  }

  await button.sendKeys(sequence)

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
  tabBackFromCancelButton
}
