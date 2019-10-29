'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testCustomer_SubscribeAllGroups } = require('../../test/customer/testCustomer_SubscribeAllGroups.js')
const router = Router()

router.route('/customer_SubscribeAllGroups')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testCustomer_SubscribeAllGroups(env)
          res.json(result)
      })
        
module.exports = {
    router
}