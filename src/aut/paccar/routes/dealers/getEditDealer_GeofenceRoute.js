'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testEditDealer_Geofence } = require('../../test/dealer/testEditDealer_Geofence.js')
const router = Router()

router.route('/editDealer_Geofence')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testEditDealer_Geofence(env)
          res.json(result)
      })
        
module.exports = {
    router
}