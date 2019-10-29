'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testEditVehicle_DealerRegionAdmin } = require('../../test/vehicle/testEditVehicle_DealerRegionAdmin.js')
const router = Router()

router.route('/editVehicle_DealerRegionAdmin')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testEditVehicle_DealerRegionAdmin(env)
          res.json(result)
      })
        
module.exports = {
    router
}