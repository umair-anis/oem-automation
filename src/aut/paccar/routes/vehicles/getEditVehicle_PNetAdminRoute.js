'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testEditVehicle_PNetAdmin } = require('../../test/vehicle/testEditVehicle_PNetAdmin.js')
const router = Router()

router.route('/editVehicle_PNetAdmin')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testEditVehicle_PNetAdmin(env)
          res.json(result)
      })
        
module.exports = {
    router
}