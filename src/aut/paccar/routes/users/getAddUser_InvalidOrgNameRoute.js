'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testAddUser_InvalidOrgName } = require('../../test/user/testAddUser_InvalidOrgName.js')
const router = Router()

router.route('/addUser_InvalidOrgName')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testAddUser_InvalidOrgName(env)
          res.json(result)
      })
        
module.exports = {
    router
}