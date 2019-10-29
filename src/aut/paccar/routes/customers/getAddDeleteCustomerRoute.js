'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testAddDeleteCustomer } = require('../../test/customer/testAddDeleteCustomer.js')
const router = Router()

router.route('/addDeleteCustomer')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testAddDeleteCustomer(env)
          res.json(result)
      })
        
module.exports = {
    router
}