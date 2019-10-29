'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testEditCustomer } = require('../../test/customer/testEditCustomer.js')
const router = Router()

router.route('/editCustomer')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testEditCustomer(env)
          res.json(result)
      })
        
module.exports = {
    router
}