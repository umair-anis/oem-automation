'use strict'

const { By } = require('selenium-webdriver')
const { GeofenceBuilder } = require('../../data/dealer/GeofenceBuilder')

const scrapeCoordinates = async (msg = {}) => {
  const parent = msg.parent
  const coords = []

  const mainPath = `//div[@layout="row"][@ng-hide="$ctrl.editingGeofence === coordinates"]`
  const lats = await parent.findElements(By.xpath(`${mainPath}//div[@translate="dealer.dealerEdit.geo_lat"]`))
  const lons = await parent.findElements(By.xpath(`${mainPath}//div[@translate="dealer.dealerEdit.geo_lon"]`))
  const totalCoords = lats.length
  let currentCoord = 0

  for (currentCoord; currentCoord < totalCoords; currentCoord++) {
    const coord = await GeofenceBuilder().setLatitude(await lats[currentCoord].getText())
      .setLongitude(await lons[currentCoord].getText())
      .build()

    await coords.push(coord)
  }

  return Object.freeze(coords)
}

module.exports = {
  scrapeCoordinates
}
