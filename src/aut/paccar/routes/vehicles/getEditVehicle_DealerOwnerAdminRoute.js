'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testEditVehicle_DealerOwnerAdmin } = require('../../test/vehicle/testEditVehicle_DealerOwnerAdmin.js')
const router = Router()

router.route('/editVehicle_DealerOwnerAdmin')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testEditVehicle_DealerOwnerAdmin(env)
          res.json(result)
      })
        
module.exports = {
    router
}