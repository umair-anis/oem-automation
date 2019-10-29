'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testAddDOG } = require('../../test/dogs/testAddDOG.js')
const router = Router()

router.route('/addDOG')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testAddDOG(env)
          res.json(result)
      })
        
module.exports = {
    router
}