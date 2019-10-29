'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testAddUser_InvalidRole } = require('../../test/user/testAddUser_InvalidRole.js')
const router = Router()

router.route('/addUser_InvalidRole')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testAddUser_InvalidRole(env)
          res.json(result)
      })
        
module.exports = {
    router
}