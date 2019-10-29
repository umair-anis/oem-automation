'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testAddUser_DealerOwnerAdmin } = require('../../test/user/testAddUser_DealerOwnerAdmin.js')
const router = Router()

router.route('/addUser_DealerOwnerAdmin')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testAddUser_DealerOwnerAdmin(env)
          res.json(result)
      })
        
module.exports = {
    router
}