'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testVehicleFault_Details } = require('../../test/vehicle/testVehicleFault_Details.js')
const router = Router()

router.route('/vehicleFault_Details')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testVehicleFault_Details(env)
          res.json(result)
      })
        
module.exports = {
    router
}