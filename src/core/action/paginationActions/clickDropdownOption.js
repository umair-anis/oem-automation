/**
 * @name clickDropdownOption
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { By } = require('selenium-webdriver')
const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')

/**
 * @function clickDropdownOption
 * @description Click a dropdown option according to its 'dropDownValue' that is specified in Message's Data
 * 
 * @param {MessageBuilder} msg
 * @param {number} msg.data
 */
const clickDropdownOption = async (msg = {}) => {

  const parent = msg.parent
  const step = msg.content
  const dropDownValue = step.data
  var result = null

  const dropdwnOptionPathCss = `[value="${dropDownValue}"]`
  const dropdwnOptionPathXpath = `//md-option[contains(text(), "${dropDownValue}")]`

  await parent.sleep(1000)

  try {
    // Try both xpath and css
    try{
      const optionElement = await parent.findElement(By.css(dropdwnOptionPathCss))
      await optionElement.click()
    } catch (e){
      const optionElement = await parent.findElement(By.xpath(dropdwnOptionPathXpath))
      await optionElement.click()
    }

    result = await ResultBuilder().setChild(msg.child)
      .setStatus('pass')
      .setDetails([`Successfully Clicked Option ${dropDownValue}`])
      .build()
  } catch (e) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Failed to Click Option ${dropDownValue} : ${e}`])
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  clickDropdownOption
}
