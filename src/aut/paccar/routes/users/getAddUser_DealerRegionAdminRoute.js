'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testAddUser_DealerRegionAdmin } = require('../../test/user/testAddUser_DealerRegionAdmin.js')
const router = Router()

router.route('/addUser_DealerRegionAdmin')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testAddUser_DealerRegionAdmin(env)
          res.json(result)
      })
        
module.exports = {
    router
}