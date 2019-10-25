/**
 * @name getTableHeader
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

let { By } = require('selenium-webdriver')

/**
 * @function getTableHeader
 * @description Return the column header names in a list
 * 
 * @param {MessageBuilder} msg
 */
const getTableHeader = async (msg = {}) => {

  const parent = msg.parent

  const headerElements = await parent.findElements(By.xpath(`//th/span`))
  var headerTextElements = []

  for(const element of headerElements){
    const elementText = await element.getText()
    if(elementText !== ``)
      headerTextElements.push(elementText)
  }

  return Object.freeze(headerTextElements)
}

module.exports = {
  getTableHeader
}
