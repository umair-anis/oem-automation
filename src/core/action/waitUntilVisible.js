/**
 * @name waitUntilVisible
 */
'use strict'

const { By } = require('selenium-webdriver')
const { ResultBuilder } = require('../result/ResultBuilder')
const { MessageBuilder } = require('../layer/MessageBuilder')

/**
 * @function waitUntilVisible
 * @description Wait until the an element is visible.
 *              This is more specific than wait.js or isDisplayed.js because this waits until the element is 
 *              interactable. 
 *              It could be displayed to the driver but sometimes we need to wait until we can interact with it
 * 
 * @param {MessageBuilder} msg
 */
const waitUntilVisible = async (msg = {}, path = ``) => {

  const parent = msg.parent
  const step = msg.content

  // Modularity to use within actions AND as an action
  if(path.length == 0){
    path = step.control.property.path
  }

  // Wait until the element is visible either by xpath or css
  var visible = false
  while(!visible){
    try{
      await parent.findElement(By.xpath(path))
      visible = true
    } catch (e){
      try{
        await parent.findElement(By.css(path))
        visible = true
      } catch (e) {}
    }
  }

  const result = await ResultBuilder().setChild(msg.child)
    .setStatus('pass')
    .setDetails([`Action Successful: Waited until ${step.control.name} was visible`])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
    waitUntilVisible
}
