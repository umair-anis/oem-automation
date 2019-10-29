'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testCustomerSetJoinDealerNetwork } = require('../../test/customer/testCustomerSetJoinDealerNetwork.js')
const router = Router()

router.route('/customerSetJoinDealerNetwork')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testCustomerSetJoinDealerNetwork(env)
          res.json(result)
      })
        
module.exports = {
    router
}