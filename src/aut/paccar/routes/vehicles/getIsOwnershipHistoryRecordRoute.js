'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testIsOwnershipHistoryRecord } = require('../../test/vehicle/testIsOwnershipHistoryRecord.js')
const router = Router()

router.route('/isOwnershipHistoryRecord')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testIsOwnershipHistoryRecord(env)
          res.json(result)
      })
        
module.exports = {
    router
}