'use strict'

/**
 * @description
 * @function getAgent
 * @param {string} url
 * @returns {AgentKeepAlive}
 * @example
 */
const getAgent = (url = '') => {
  let agentType = {}
  const httpType = url.substr(0, 5)

  if (httpType === 'https') {
    agentType = new agent.HttpsAgent({
      maxSockets: 5,
      maxFreeSockets: 20,
      timeout: 10000,
      keepAliveTimeout: 30
    })
  } else {
    agentType = new agent({
      maxSockets: 5,
      maxFreeSockets: 20,
      timeout: 10000,
      keepAliveTimeout: 30
    })
  }

  return Object.freeze(agentType)
}

module.exports = {
  getAgent
}
