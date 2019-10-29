'use strict'

const { By } = require('selenium-webdriver')

const scrapeMainDetails = async (msg = {}) => {
  const parent = msg.parent
  const nameElement = await parent.findElement(By.xpath(`//input[@ng-model="$ctrl.dealer.name"]`))
  const idElement = await parent.findElement(By.xpath(`//input[@ng-model="$ctrl.dealer.dealerIds[0]"]`))
  const emailElement = await parent.findElement(By.xpath(`//input[@ng-model="$ctrl.dealer.emailAddresses[0].address"]`))
  const latElement = await parent.findElement(By.xpath(`//input[@ng-model="$ctrl.dealer.location.lat"]`))
  const lonElement = await parent.findElement(By.xpath(`//input[@ng-model="$ctrl.dealer.location.lon"]`))

  const details = {
    name: await nameElement.getAttribute('value'),
    id: await idElement.getAttribute('value'),
    email: await emailElement.getAttribute('value'),
    lat: await latElement.getAttribute('value'),
    lon: await lonElement.getAttribute('value')
  }

  return Object.freeze(details)
}

module.exports = {
  scrapeMainDetails
}
