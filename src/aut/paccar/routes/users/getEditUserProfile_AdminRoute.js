'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testEditUserProfile_Admin } = require('../../test/user/testEditUserProfile_Admin.js')
const router = Router()

router.route('/editUserProfile_Admin')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testEditUserProfile_Admin(env)
          res.json(result)
      })
        
module.exports = {
    router
}