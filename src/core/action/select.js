/**
 * @name select
 */
'use strict'

const { By } = require('selenium-webdriver')
const { getCurrentIterationData } = require('../iteration/getCurrentIterationData')
const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function select
 * @description Click a certain dropdown Select a Dropdown Item Option using its predetermined path. 
 *              Then search for which option to click with the item's xpath
 *
 * @param {MessageBuilder} msg
 */
const select = async (msg = {}) => {
  const parent = msg.parent
  const child = msg.child
  const step = msg.content
  const data = await getCurrentIterationData(msg)
  var result = null

  await child.click()

  // Because the dropdowns may use any combination (given our list of paths to check) a static wait is best
  // TODO: Look into changing this
  await parent.sleep(1000)

  const paths = [`//*[@value='${data}']`,
    `//md-option/div[text() = "${data}"]`,
    `//md-option/div[contains(text(), "${data}")]`,
    `//div[@aria-hidden="false"]//md-option/div[text() = "${data}"]`,
    `//div[@aria-hidden="false"]//md-option[@value="${data}"]`]

  // Check if the dropdown has values as its index
  for (const path of paths) {
    try {
      const dropdownButton = await parent.findElement(By.xpath(path))
      await dropdownButton.click()

      result = await ResultBuilder().setChild(msg.child)
        .setStatus('pass')
        .setDetails([`Action Successful: Selected${data} from drop-down ${step.control.name}.`])
        .build()
      break
    } catch (e) {
      /* ignore */
    }
  }

  if (result == null) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Action FAILED: Select: ${data} from drop-down: ${step.control.name}.`])
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  select
}
