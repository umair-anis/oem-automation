'use strict'

const { By } = require('selenium-webdriver')
const { LocationBuilder } = require('../../data/dealer/LocationBuilder')

const scrapeLocations = async (msg = {}) => {
  const parent = msg.parent
  const locations = []
  const mainPath = `//div[@layout="row"][@ng-hide="$ctrl.editingAddress === address"]`
  const addresses = await parent.findElements(By.xpath(`${mainPath}//div[@ng-if="$ctrl.value.streetAddress"]`))
  const states = await parent.findElements(By.xpath(`${mainPath}//div[@ng-if="$ctrl.value.city || $ctrl.value.state || $ctrl.value.zipcode"]`))
  const totalLocations = addresses.length
  let currentLocation = 0

  for (currentLocation; currentLocation < totalLocations; currentLocation++) {
    const cityStateZip = await states[currentLocation].getText()
    const fields = await cityStateZip.split(',')
    const city = fields[0]
    const stateZip = await fields[1].split(' ')
    const state = stateZip[1]
    const zip = stateZip[2]
    const location = await LocationBuilder().setAddress1(await addresses[currentLocation].getText())
      .setCity(city)
      .setState(state)
      .setZipCode(zip)
      .build()

    await locations.push(location)
  }
}

module.exports = {
  scrapeLocations
}
