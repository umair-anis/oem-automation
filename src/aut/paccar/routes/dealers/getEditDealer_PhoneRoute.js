'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testEditDealer_Phone } = require('../../test/dealer/testEditDealer_Phone.js')
const router = Router()

router.route('/editDealer_Phone')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testEditDealer_Phone(env)
          res.json(result)
      })
        
module.exports = {
    router
}