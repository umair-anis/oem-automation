'use strict'

const { buildTestDeviceAction } = require('./buildTestDeviceAction')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { DeviceBuilder } = require('../../data/devices/DeviceBuilder')

const testDeviceClearAgentNVRam = async (env = {}, credential = '') => {
  const device = await DeviceBuilder().setDSN(`7568882`)
    .setAction(`Clear Agent NVRAM`)
    .setConfirmation(`Clear Agent NVRam request sent`)
    .build()

  const test = await buildTestDeviceAction(env, credential, device)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testDeviceClearAgentNVRam
}
