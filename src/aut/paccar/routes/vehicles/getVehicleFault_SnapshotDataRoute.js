'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testVehicleFault_SnapshotData } = require('../../test/vehicle/testVehicleFault_SnapshotData.js')
const router = Router()

router.route('/vehicleFault_SnapshotData')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testVehicleFault_SnapshotData(env)
          res.json(result)
      })
        
module.exports = {
    router
}