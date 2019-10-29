'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testEditVehicle_DealerAdmin } = require('../../test/vehicle/testEditVehicle_DealerAdmin.js')
const router = Router()

router.route('/editVehicle_DealerAdmin')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testEditVehicle_DealerAdmin(env)
          res.json(result)
      })
        
module.exports = {
    router
}