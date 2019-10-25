/**
 * @name waitUntilPageLoaded
 */
'use strict'

const { By } = require('selenium-webdriver')
const { ResultBuilder } = require('../result/ResultBuilder')
const { MessageBuilder } = require('../layer/MessageBuilder')

/**
 * @function waitUntilPageLoaded
 * @description Wait until the progress bar loads and disappears.
 *              This is a consistent indicator that our portal has loaded
 * 
 * @param {MessageBuilder} msg
 */
const waitUntilPageLoaded = async (msg = {}) => {

  const parent = msg.parent
  const progressBarLoaded = `//md-progress-linear[@aria-hidden="true"]`

  // Wait for the progress bar to start loading
  await parent.sleep(500)

  var found = false
  while(!found){
      try{
        await parent.findElement(By.xpath(progressBarLoaded))
        found = true
      } catch (e) {}
  }

  const result = await ResultBuilder().setChild(msg.child)
    .setStatus('pass')
    .setDetails([`Action Successful: Waited Until Page Loaded`])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
    waitUntilPageLoaded
}
