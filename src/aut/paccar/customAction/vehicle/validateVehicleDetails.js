'use strict'

const { MessageBuilder } = require('../../../../core/layer/MessageBuilder')
const { ResultBuilder } = require('../../../../core/result/ResultBuilder')

const { getVehicleDetails } = require('./getVehicleDetails')

/**
 * @description Equallity check for a vehicleDetaoils object
 * @param {*} msg
 */
const validateVehicleDetails = async (msg = {}) => {
  const parent = msg.parent
  const step = msg.content
  const data = step.data
  var result = null

  const vehicleDetails = await getVehicleDetails(msg)

  try {
    // Validate every Vehicle detail property matches the data
    /*for (var property in vehicleDetails) {
      if (data[property] !== vehicleDetails[property]) {
        throw new Error(`Vehicles do match by property: ${property}`)
      }
    }*/

    // Validate DSN, Description, Unit Number Vehicle detail property matches the data
    if(vehicleDetails.dsn !== data.dsn || vehicleDetails.description !== data.description || vehicleDetails.unitNumber !== data.unitNumber)
      throw new Error(`Vehicles do match by property: dsn, description, or unitNumber`)

    result = await ResultBuilder().setParent(parent)
      .setDetails([`Validated Vehicle Details Objects have equal values`])
      .setStatus('pass')
      .build()
  } catch (e) {
    result = await ResultBuilder().setParent(parent)
      .setDetails([`Error Validating Vehicle Details - Vehicle Details Objects are not equal values`])
      .setStatus('fail')
      .build()
  }

  const resultMsg = await MessageBuilder().setParent(parent)
    .setContent(result)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  validateVehicleDetails
}
