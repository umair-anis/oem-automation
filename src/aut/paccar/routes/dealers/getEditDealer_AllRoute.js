'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testEditDealer_All } = require('../../test/dealer/testEditDealer_All.js')
const router = Router()

router.route('/editDealer_All')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testEditDealer_All(env)
          res.json(result)
      })
        
module.exports = {
    router
}