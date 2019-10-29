'use strict'

const { DealerBuilder } = require('../../data/dealer/DealerBuilder')
const { scrapeCoordinates } = require('./scrapeCoordinates')
const { scrapeHoursOfService } = require('./scrapeHoursOfService')
const { scrapeLocations } = require('./scrapeLocations')
const { scrapeMainDetails } = require('./scrapeMainDetails')
const { scrapePhoneNumbers } = require('./scrapePhoneNumbers')

const scrapeDealerEdit = async (msg = {}) => {
  const coords = await scrapeCoordinates(msg)
  const locations = await scrapeLocations(msg)
  const phoneNumbers = await scrapePhoneNumbers(msg)
  const hoursOfService = await scrapeHoursOfService(msg)
  const details = await scrapeMainDetails(msg)

  const dealer = await DealerBuilder().setGeofenceSteps(coords)
    .setName(details.name)
    .setID(details.id)
    .setEmail(details.email)
    .setLatitude(details.lat)
    .setLongitude(details.lon)
    .setLocation(locations)
    .setPhoneNumber(phoneNumbers)
    .setHoursOfService(hoursOfService)
    .build()

  return Object.freeze(dealer)
}

module.exports = {
  scrapeDealerEdit
}
