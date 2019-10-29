'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testCustomerAddExisted } = require('../../test/customer/testCustomerAddExisted.js')
const router = Router()

router.route('/customerAddExisted')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testCustomerAddExisted(env)
          res.json(result)
      })
        
module.exports = {
    router
}