'use strict'

const { buildTestEditOEMFactory } = require('./buildTestEditOEMFactory')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { OEMBuilder } = require('../../data/oems/OEMBuilder')
const { FactoryBuilder } = require('../../data/oems/FactoryBuilder')

const testEditOEMFactory = async (env = {}, credential = '', data = {}) => {

  const oem = await OEMBuilder().setName(data.oemName)
    .build()

  const factory = await FactoryBuilder().setCity(data.city)
    .setCode(data.code)
    .setLatitude(data.latitude)
    .setLongitude(data.longitude)
    .build()

  const test = await buildTestEditOEMFactory(env, credential, oem, factory)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testEditOEMFactory
}
