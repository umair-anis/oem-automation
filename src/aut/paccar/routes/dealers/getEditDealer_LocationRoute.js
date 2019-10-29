'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testEditDealer_Location } = require('../../test/dealer/testEditDealer_Location.js')
const router = Router()

router.route('/editDealer_Location')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testEditDealer_Location(env)
          res.json(result)
      })
        
module.exports = {
    router
}