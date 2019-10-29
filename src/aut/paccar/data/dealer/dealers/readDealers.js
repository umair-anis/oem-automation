'use strict'

const { buildData } = require('../../../config/strategy/buildData')
const { buildDealers } = require('./buildDealers')
const { filterDealersByState } = require('./filterDealersByState')

const readDealers = async (env = {}, state = null) => {
  const content = await buildData(env.name, readDev, readQa, readStaging, readProd)
  const dealers = await buildDealers(content.dealers)
  const filteredDealers = await filterDealersByState(dealers, state)
  return Object.freeze(filteredDealers)
}

const readDev = () => {
  return Object.freeze(require('./devDealers.json'))
}

const readQa = () => {
  return Object.freeze(require('./qaDealers.json'))
}

const readStaging = () => {
  return Object.freeze(require('./stagingDealers.json'))
}

const readProd = () => {
  return Object.freeze(require('./prodDealers.json'))
}

module.exports = {
  readDealers
}
