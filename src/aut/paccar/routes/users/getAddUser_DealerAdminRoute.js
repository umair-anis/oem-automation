'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testAddUser_DealerAdmin } = require('../../test/user/testAddUser_DealerAdmin.js')
const router = Router()

router.route('/addUser_DealerAdmin')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testAddUser_DealerAdmin(env)
          res.json(result)
      })
        
module.exports = {
    router
}