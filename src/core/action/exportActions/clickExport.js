/**
 * @name clickExport
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { By } = require('selenium-webdriver')
const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')

/**
 * @function clickExport
 * @description Click the Export options given its 'More Options' and 'Export' Path. This is a simple
 *              way to call this function with no paraemters
 *
 * @param {MessageBuilder} msg
 */
const clickExport = async (msg = {}) => {

  const parent = msg.parent
  var buttonMoreOptions = null
  var buttonExport = null

  const pathMoreOptions = `//div/md-card/list-toolbar/md-toolbar/div/div/md-menu/button`
  const pathExport = `[ng-if="!textButton.template"][ng-click="textButton.click($event, $ctrl)"]`

  try {
    buttonMoreOptions = await parent.findElement(By.xpath(pathMoreOptions))
    buttonExport = await parent.findElement(By.css(pathExport))

    // Click More Options, wait to load, Export
    await buttonMoreOptions.click()
    await parent.sleep(2000)
    await buttonExport.click()
  } catch (e) {
    throw new Error(`Could not find: More Options Dropdown or Export Button : ${e}`)
  }

  const result = await ResultBuilder().setChild(msg.child)
    .setStatus('pass')
    .setDetails([`Successfully Clicked Export`])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  clickExport
}
