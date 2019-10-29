'use strict'

const filterDealersByState = (dealers = [], state = {}) => {
  let filteredDealers = []

  // If a specific data state has been specified then filter the data baased upon the requested state.
  if (state != null) {
    filteredDealers = dealers.filter(d => {
      if (d.coordinates.length >= state.coordinatesCount && d.locations.length >= state.locationCount && d.hoursOfService.length >= state.serviceHoursCount && d.phoneNumbers.length >= state.phoneNumbersCount) {
        if (state.hasStreetAddress2 && (d.streetAddress2 !== '')) {
          return d
        } else {
          if (state.hasStreetAddress2 === false) {
            return d
          }
        }
      }
    })
  } else { // If no data state has been specified then just return the main list of dealers.
    filteredDealers = dealers
  }

  return Object.freeze(filteredDealers)
}

module.exports = {
  filterDealersByState
}
