'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testCustomer_SubscribedUsers } = require('../../test/customer/testCustomer_SubscribedUsers.js')
const router = Router()

router.route('/customer_SubscribedUsers')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testCustomer_SubscribedUsers(env)
          res.json(result)
      })
        
module.exports = {
    router
}