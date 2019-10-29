'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testVehicleDevices } = require('../../test/vehicle/testVehicleDevices.js')
const router = Router()

router.route('/vehicleDevices')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testVehicleDevices(env)
          res.json(result)
      })
        
module.exports = {
    router
}