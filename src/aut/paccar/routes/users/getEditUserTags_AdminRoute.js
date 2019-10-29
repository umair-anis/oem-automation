'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testEditUserTags_Admin } = require('../../test/user/testEditUserTags_Admin.js')
const router = Router()

router.route('/editUserTags_Admin')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testEditUserTags_Admin(env)
          res.json(result)
      })
        
module.exports = {
    router
}