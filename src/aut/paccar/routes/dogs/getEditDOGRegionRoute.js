'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testEditDOGRegion } = require('../../test/dogs/testEditDOGRegion.js')
const router = Router()

router.route('/editDOGRegion')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testEditDOGRegion(env)
          res.json(result)
      })
        
module.exports = {
    router
}