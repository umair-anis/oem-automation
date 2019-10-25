/**
 * @name clickFormEntryButton
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { By } = require('selenium-webdriver')
const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')

/**
 * @function clickFormEntryButton
 * @description This program loops through the rows in a form and clicks a certain
 *              button 'index' of a row with the title 'search' from the Message Data
 *
 * @param {MessageBuilder} msg
 * @param {[string, number]} msg.data
 */
const clickFormEntryButton = async (msg = {}) => {
  // Get the form xpath via its 'propertyPath'
  const parent = msg.parent
  const step = msg.content
  const formPath = step.control.property.path
  const search = step.data[0][0]
  const buttonIndex = step.data[0][1]
  var result = null

  const rows = await parent.findElements(By.xpath(formPath + `/div`))
  const rowCount = rows.length

  var i
  for (i = 1; i <= rowCount; i++) {
    const rowTitlePath = formPath + `/div[${i}]/div/span`
    const rowTitleElement = await parent.findElement(By.xpath(rowTitlePath))
    var rowTitle = await rowTitleElement.getText()

    if (rowTitle == search) {
      const buttonPath = formPath + `/div[${i}]/div/button[${buttonIndex}]`
      const buttonElement = await parent.findElement(By.xpath(buttonPath))
      await buttonElement.click()

      result = await ResultBuilder().setChild(msg.child)
        .setStatus('pass')
        .setDetails([`Clicked Form Button: ${search} button index: ${buttonIndex}`])
        .build()
      break
    }
  }

  if (i > rowCount) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Cannot click Form Button: ${search} button index: ${buttonIndex} : ${e}`])
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  clickFormEntryButton
}
