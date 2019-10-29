'use strict'

const { buildTestClickHealthSoftwareSlider } = require('./buildTestClickHealthSoftwareSlider')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testClickHealthSoftwareSlider = async (env = {}, credential = '') => {
  const test = await buildTestClickHealthSoftwareSlider(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testClickHealthSoftwareSlider
}
