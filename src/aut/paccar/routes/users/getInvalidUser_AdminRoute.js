'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testInvalidUser_Admin } = require('../../test/user/testInvalidUser_Admin.js')
const router = Router()

router.route('/invalidUser_Admin')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testInvalidUser_Admin(env)
          res.json(result)
      })
        
module.exports = {
    router
}