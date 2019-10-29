'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testSetIsRepairVehicle } = require('../../test/vehicle/testSetIsRepairVehicle.js')
const router = Router()

router.route('/setIsRepairVehicle')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testSetIsRepairVehicle(env)
          res.json(result)
      })
        
module.exports = {
    router
}