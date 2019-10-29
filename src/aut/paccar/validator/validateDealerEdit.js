'use strict'

const { ResultBuilder } = require('../../../core/result/ResultBuilder')

const validateDealerEdit = async (testData = {}, uiData = {}) => {
  const msgs = []
  if (testData.name !== uiData.name) msgs.push(`Dealer names do not match.`)
  if (testData.email !== uiData.email) msgs.push(`Dealer emails do not match.`)
  if (testData.id !== uiData.id) msgs.push(`Dealer IDs do not match.`)
  if (testData.latitude !== uiData.latitude) msgs.push(`Dealer latitudes do not match.`)
  if (testData.longitude !== uiData.longitude) msgs.push(`Dealer longitudes do not match.`)

  const totalCoordinates = testData.coordinates.length
  let currentItem = 0

  for (currentItem; currentItem < totalCoordinates; currentItem++) {
    if (testData.coordinates[currentItem].latitude !== uiData.coordinates[currentItem].latitude) msgs.push(`Dealer coordinates ${currentItem} latitudes do not match.`)
    if (testData.coordinates[currentItem].longitude !== uiData.coordinates[currentItem].longitude) msgs.push(`Dealer coordinates ${currentItem} longitudes do not match.`)
  }

  // For each location compare the street addres, city, state, and zip
  // For each phone number compare the number
  // For each service hours compare the days of the week, start time, and closing time
  const status = (msgs.length === 0) ? 'pass' : 'fail'
  const result = await ResultBuilder().setStatus(status)
    .setDetails(msgs)
    .build()

  return Object.freeze(result)
}

module.exports = {
  validateDealerEdit
}
