'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testRunDiagnostics } = require('../../test/vehicle/testRunDiagnostics.js')
const router = Router()

router.route('/runDiagnostics')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testRunDiagnostics(env)
          res.json(result)
      })
        
module.exports = {
    router
}