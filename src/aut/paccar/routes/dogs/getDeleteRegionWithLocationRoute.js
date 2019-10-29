'use strict'
const { Router } = require('express')
const { readEnv } = require('../../config/reader/readEnv')
const { testDeleteRegionWithLocation } = require('../../test/dogs/testDeleteRegionWithLocation.js')
const router = Router()

router.route('/deleteRegionWithLocation')
      .get(async (req, res) => {
          const env = await readEnv()
          const result = await testDeleteRegionWithLocation(env)
          res.json(result)
      })
        
module.exports = {
    router
}