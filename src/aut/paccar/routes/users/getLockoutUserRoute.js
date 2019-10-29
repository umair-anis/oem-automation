'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testLockoutUser } = require('../../test/user/testLockoutUser.js')
const router = Router()

router.route('/lockoutUser')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testLockoutUser(env)
          res.json(result)
      })
        
module.exports = {
    router
}