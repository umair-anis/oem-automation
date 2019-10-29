'use strict'

const { buildTestDeviceAction } = require('./buildTestDeviceAction')
const { invokeTest } = require('../../../../core/test/invokeTest')
const { DeviceBuilder } = require('../../data/devices/DeviceBuilder')

const testDeviceRunDiagnostics = async (env = {}, credential = '') => {
  const dsn = `7578370`
  const device = await DeviceBuilder().setDSN(dsn)
    .setAction(`Run Diagnostic`)
    .setConfirmation(`DSN: ${dsn}`)
    .build()

  const test = await buildTestDeviceAction(env, credential, device)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testDeviceRunDiagnostics
}
