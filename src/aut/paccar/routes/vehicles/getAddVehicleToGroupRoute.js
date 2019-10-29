'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testAddVehicleToGroup } = require('../../test/vehicle/testAddVehicleToGroup.js')
const router = Router()

router.route('/addVehicleToGroup')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testAddVehicleToGroup(env)
          res.json(result)
      })
        
module.exports = {
    router
}