'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testEditDealer_HoursOfService } = require('../../test/dealer/testEditDealer_HoursOfService.js')
const router = Router()

router.route('/editDealer_HoursOfService')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testEditDealer_HoursOfService(env)
          res.json(result)
      })
        
module.exports = {
    router
}