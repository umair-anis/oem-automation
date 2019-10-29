'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testEditVehicle_PaccarAdmin } = require('../../test/vehicle/testEditVehicle_PaccarAdmin.js')
const router = Router()

router.route('/editVehicle_PaccarAdmin')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testEditVehicle_PaccarAdmin(env)
          res.json(result)
      })
        
module.exports = {
    router
}