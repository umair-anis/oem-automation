'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testDeleteUser_Admin } = require('../../test/user/testDeleteUser_Admin.js')
const router = Router()

router.route('/deleteUser_Admin')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testDeleteUser_Admin(env)
          res.json(result)
      })
        
module.exports = {
    router
}