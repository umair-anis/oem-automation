'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testIsAuthorizedServiceCenter } = require('../../test/vehicle/testIsAuthorizedServiceCenter.js')
const router = Router()

router.route('/isAuthorizedServiceCenter')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testIsAuthorizedServiceCenter(env)
          res.json(result)
      })
        
module.exports = {
    router
}