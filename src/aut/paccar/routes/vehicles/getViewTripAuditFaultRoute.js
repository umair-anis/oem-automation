'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testViewTripAuditFault } = require('../../test/vehicle/testViewTripAuditFault.js')
const router = Router()

router.route('/viewTripAuditFault')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testViewTripAuditFault(env)
          res.json(result)
      })
        
module.exports = {
    router
}