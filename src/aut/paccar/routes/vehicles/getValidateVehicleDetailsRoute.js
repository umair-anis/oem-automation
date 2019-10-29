'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testValidateVehicleDetails } = require('../../test/vehicle/testValidateVehicleDetails.js')
const router = Router()

router.route('/validateVehicleDetails')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testValidateVehicleDetails(env)
          res.json(result)
      })
        
module.exports = {
    router
}