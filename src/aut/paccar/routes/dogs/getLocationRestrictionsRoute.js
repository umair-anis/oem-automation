'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testLocationRestrictions } = require('../../test/dogs/testLocationRestrictions.js')
const router = Router()

router.route('/locationRestrictions')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testLocationRestrictions(env)
          res.json(result)
      })
        
module.exports = {
    router
}