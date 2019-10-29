'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testAddVehicleToCreatedGroup } = require('../../test/vehicle/testAddVehicleToCreatedGroup.js')
const router = Router()

router.route('/addVehicleToCreatedGroup')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testAddVehicleToCreatedGroup(env)
          res.json(result)
      })
        
module.exports = {
    router
}