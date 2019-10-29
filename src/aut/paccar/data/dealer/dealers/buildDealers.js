'use strict'

const { AddressBuilder } = require('../../address/AddressBuilder')
const { CoordinateBuilder } = require('../../coordinates/CoordinateBuilder')
const { DealerBuilder } = require('../DealerBuilder')
const { HoursOfServiceBuilder } = require('../HoursOfServiceBuilder')
const { PhoneNumberBuilder } = require('../../phone/PhoneNumberBuilder')

const buildDealers = async (dealers = []) => {
  const convertedDealers = []

  for (const dealer of dealers) {
    const coordinates = []
    const locations = []
    const phoneNumbers = []
    const hoursOfService = []

    for (const coordinate of dealer.coordinates) {
      coordinates.push(await CoordinateBuilder().setLat(coordinate.lat)
        .setLon(coordinate.lon)
        .build())
    }

    for (const location of dealer.locations) {
      locations.push(await AddressBuilder().setType(location.type)
        .setLine1(location.line1)
        .setLine2(location.line2)
        .setCity(location.city)
        .setState(location.state)
        .setZip(location.zip)
        .build())
    }

    for (const phoneNumber of dealer.phoneNumbers) {
      phoneNumbers.push(await PhoneNumberBuilder().setType(phoneNumber.type)
        .setNumber(phoneNumber.number)
        .build())
    }

    for (const hours of dealer.hoursOfService) {
      hoursOfService.push(await HoursOfServiceBuilder().setServiceType(hours.serviceType)
        .setOpen(hours.open)
        .setClose(hours.close)
        .setDaysOfWeek(hours.daysOfWeek)
        .build())
    }

    convertedDealers.push(await DealerBuilder().setName(dealer.name)
      .setCode(dealer.code)
      .setID(dealer.id)
      .setEmail(dealer.email)
      .setLat(dealer.lat)
      .setLon(dealer.lon)
      .setCoordinates(coordinates)
      .setLocations(locations)
      .setPhoneNumbers(phoneNumbers)
      .setHoursOfService(hoursOfService)
      .build())
  }

  return Object.freeze(convertedDealers)
}

module.exports = {
  buildDealers
}
