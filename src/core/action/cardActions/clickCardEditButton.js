/**
 * @name clickCardEditButton
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { By } = require('selenium-webdriver')
const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')

/**
 * @function clickCardEditButton
 * @description This program loops through a set of cards to find a row with the same key
 *              as what is passed in as data
 *
 * @param {MessageBuilder} msg
 * @param {string} msg.data
 */
const clickCardEditButton = async (msg = {}) => {
  // Get the card xpath via its 'propertyPath'
  const parent = msg.parent
  const step = msg.content
  const cardPath = step.control.property.path
  const search = step.data[0].toLowerCase()
  var result = null

  const rows = await parent.findElements(By.xpath(cardPath + `/div`))
  const rowCount = rows.length

  var i
  for (i = 1; i <= rowCount; i++) {
    const rowPath = cardPath + `/div[position() = ${i}]`
    const rowTitle = await parent.findElement(By.xpath(rowPath + `/div`))
    var rowText = await rowTitle.getText()
    rowText = rowText.toLowerCase()

    if (rowText.includes(search)) {
      const editButton = await parent.findElement(By.xpath(rowPath + `//button[position() = 1]`))
      await editButton.click()

      result = await ResultBuilder().setChild(msg.child)
        .setStatus('pass')
        .setDetails([`Clicked Edit Button in row: ${i}`])
        .build()
      break
    }
  }

  if (i > rowCount) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Could not click a edit button: ${search}`])
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  clickCardEditButton
}
