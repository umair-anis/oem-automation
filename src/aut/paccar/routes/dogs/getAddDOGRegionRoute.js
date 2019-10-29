'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testAddDOGRegion } = require('../../test/dogs/testAddDOGRegion.js')
const router = Router()

router.route('/addDOGRegion')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testAddDOGRegion(env)
          res.json(result)
      })
        
module.exports = {
    router
}