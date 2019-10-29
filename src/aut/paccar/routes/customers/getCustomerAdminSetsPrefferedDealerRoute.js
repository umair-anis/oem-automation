'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testCustomerAdminSetsPrefferedDealer } = require('../../test/customer/testCustomerAdminSetsPrefferedDealer.js')
const router = Router()

router.route('/customerAdminSetsPrefferedDealer')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testCustomerAdminSetsPrefferedDealer(env)
          res.json(result)
      })
        
module.exports = {
    router
}