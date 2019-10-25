'use strict'

const { EnvironmentBuilder } = require('./EnvironmentBuilder')
const { isValidEnv } = require('./isValidEnv')

const readEnv = async (path = '') => {
  const envData = require(path)

  const env = await EnvironmentBuilder().setIsRemote(envData.isRemote)
    .setIsSauceLabs(envData.isSauceLabs)
    .setName(envData.name)
    .setRemoteUrl(envData.remoteUrl)
    .setCreateBaselineScreenshots(envData.createBaselineScreenshots)
    .setBaselinePath(envData.baselinePath)
    .setCompareScreenshots(envData.compareScreenshots)
    .setScreenshotOnFailure(envData.screenshotOnFailure)
    .setScreenshotPath(envData.screenshotPath)
    .build(isValidEnv)

  return Object.freeze(env)
}

module.exports = {
  readEnv
}
