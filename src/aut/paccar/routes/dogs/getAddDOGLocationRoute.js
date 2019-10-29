'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testAddDOGLocation } = require('../../test/dogs/testAddDOGLocation.js')
const router = Router()

router.route('/addDOGLocation')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testAddDOGLocation(env)
          res.json(result)
      })
        
module.exports = {
    router
}