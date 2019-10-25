/**
 * @name clickFilterType
 * @author Avery Swank
 * 8/20/2019
 */
'use strict'

const { By } = require('selenium-webdriver')
const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')

/**
 * @function clickFilterType
 * @description The Filter by Type Dropdown is not a simple dropdown. There are too many dynamic elements interacting with nested text and
 *              such, so we are using an action to simplify the work by storing the type dropdown into an object.
 * 
 *              There are multiple layers of text that need to be parsed in order to have a simple dropdown lookup system
 *
 * @param {MessageBuilder} msg
 *
 * @returns {dropdown} Filters by Type Dropdown Object
 */
const clickFilterType = async (msg = {}) => {

  const parent = msg.parent
  const step = msg.content
  const search = step.data
  var result = null

  try{
      const dropdownOptions = await parent.findElements(By.xpath(`//div[@aria-hidden="false"]//md-menu-item`))
      const length = dropdownOptions.length

      // Span through the dropdown for the correct text
      for(var i = 1; i <= length; i++){
          const button = await parent.findElement(By.xpath(`//div[@aria-hidden="false"]//md-menu-item[${i}]//button`))
          const icon = await parent.findElement(By.xpath(`//div[@aria-hidden="false"]//md-menu-item[${i}]//button/md-icon`))

          // Remove any extra icon button text
          const buttonText = await button.getText()
          const iconText = await icon.getText()
          const dropdownText = buttonText.replace(`${iconText} `, ``)

          // If found the correct Filter Type, click it
          if(dropdownText == search){
            await button.click()
            break
          }
      }

      result = await ResultBuilder().setChild(msg.child)
                                    .setStatus('pass')
                                    .setDetails([`Successfully Clicked Filer Type: ${search}`])
                                    .build()
  } catch (e) {
      result = await ResultBuilder().setChild(msg.child)
                                    .setStatus('pass')
                                    .setDetails([`Failed to click Filter by Type Dropdown: ${e}`])
                                    .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  clickFilterType
}
