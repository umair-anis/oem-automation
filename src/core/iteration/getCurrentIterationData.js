'use strict'

/**
 * @description
 * @function getCurrentIterationData
 * @param {Step} step
 * @async
 * @returns {string}
 * @example
 */
const getCurrentIterationData = async (msg = {}) => {
  let dataToUse = ''
  const step = msg.content
  const data = msg.content.data
  const dataKey = step.dataKey
  const dynamicData = msg.dynamicData
  const iteration = step.currentIteration
  const index = iteration - 1

  if (dataKey.trim() !== '' && step.action.name !== 'scrape') {
    const totalData = dynamicData.length
    const matchingData = []
    let currentData = 0

    for (currentData; currentData < totalData; currentData++) {
      if (dynamicData[currentData].key.toLowerCase() === dataKey.toLowerCase()) {
        matchingData.push(dynamicData[currentData])
      }
    }

    dataToUse = await (matchingData[0].values.length < index) ? matchingData[0].values[matchingData[0].values.length - 1] : matchingData[0].values[index]
  } else {
    dataToUse = await (data.length < index) ? data[data.length - 1] : data[index]
  }

  return Object.freeze(dataToUse)
}

module.exports = {
  getCurrentIterationData
}
