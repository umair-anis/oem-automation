'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testEditUserNotifications_Admin } = require('../../test/user/testEditUserNotifications_Admin.js')
const router = Router()

router.route('/editUserNotifications_Admin')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testEditUserNotifications_Admin(env)
          res.json(result)
      })
        
module.exports = {
    router
}