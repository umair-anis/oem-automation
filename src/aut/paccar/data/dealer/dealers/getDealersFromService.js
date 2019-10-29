'use strict'

const { filterDealersByState } = require('./filterDealersByState')
const { sendGet } = require('../../../../../core/rest/sendGet')

const getDealersFromService = async (env = {}, state = null) => {
  // registry.devops.connectedfleet.io/entity-search:5.383.0 ports: 55675 & 62433
  const res = await sendGet(env.entitySearchServiceUrl, null)
  const filteredDealers = await filterDealersByState(res.body, state)
  return Object.freeze(filteredDealers)
}

module.exports = {
  getDealersFromService
}
