'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testEditDOGInfo } = require('../../test/dogs/testEditDOGInfo.js')
const router = Router()

router.route('/editDOGInfo')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testEditDOGInfo(env)
          res.json(result)
      })
        
module.exports = {
    router
}