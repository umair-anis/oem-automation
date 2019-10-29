'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testTransferOwnership } = require('../../test/vehicle/testTransferOwnership.js')
const router = Router()

router.route('/transferOwnership')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testTransferOwnership(env)
          res.json(result)
      })
        
module.exports = {
    router
}