'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testEditVehicle_CustomerAdmin } = require('../../test/vehicle/testEditVehicle_CustomerAdmin.js')
const router = Router()

router.route('/editVehicle_CustomerAdmin')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testEditVehicle_CustomerAdmin(env)
          res.json(result)
      })
        
module.exports = {
    router
}