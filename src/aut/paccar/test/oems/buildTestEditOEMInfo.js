'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickOEMs } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickOEMs')
const { enterOEMFilter } = require('../../scenario/oems/enterOEMFilter')
const { buildEditOEMInformation } = require('../../scenario/oems/buildEditOEMInformation')
const { validateOEMFormErrors } = require('../../scenario/oems/validateOEMFormErrors')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestEditOEMInfo = async (env = {}, credential = '', oem = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const oemFormErrors = [`Name required.`, `Subscription length required.`, `Complimentary warranty length required.`]

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickOEMsScenario = await clickOEMs()
  const enterOEMFilterScenario = await enterOEMFilter(oem.name)
  const buildEditOEMInformationScenario = await buildEditOEMInformation(oem)
  const validateOEMFormErrorsScenario = await validateOEMFormErrors(oemFormErrors)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickOEMsScenario,
    enterOEMFilterScenario,
    buildEditOEMInformationScenario,
    validateOEMFormErrorsScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing OEM - Edit OEM Information: ${oem.name}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestEditOEMInfo
}
