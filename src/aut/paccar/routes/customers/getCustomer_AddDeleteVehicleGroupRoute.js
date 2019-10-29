'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testCustomer_AddDeleteVehicleGroup } = require('../../test/customer/testCustomer_AddDeleteVehicleGroup.js')
const router = Router()

router.route('/customer_AddDeleteVehicleGroup')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testCustomer_AddDeleteVehicleGroup(env)
          res.json(result)
      })
        
module.exports = {
    router
}