'use strict'

const { By } = require('selenium-webdriver')
const { PhoneNumberBuilder } = require('../../data/dealer/PhoneNumberBuilder')

const scrapePhoneNumbers = async (msg = {}) => {
  const parent = msg.parent
  const phoneNumbers = []
  const elements = await parent.findElements(By.xpath(`//div[@layout="row"][@ng-hide="$ctrl.editingPhone === phone"]//div[@ng-bind="phone.number | phoneNumber"]`))

  for (const element of elements) {
    const number = await element.getText()
    const phoneNumber = await PhoneNumberBuilder().setNumber(number).build()
    await phoneNumbers.push(phoneNumber)
  }

  return Object.freeze(phoneNumbers)
}

module.exports = {
  scrapePhoneNumbers
}
