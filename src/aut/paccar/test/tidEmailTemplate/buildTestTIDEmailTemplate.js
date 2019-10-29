'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickTIDEmailTemplate } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickTIDEmailTemplate')
const { buildTIDEmailTemplate } = require('../../scenario/tidEmailTemplate/buildTIDEmailTemplate')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestTIDEmailTemplate = async (env = {}, credential = '', template = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickTIDEmailTemplateScenario = await clickTIDEmailTemplate()
  const buildTIDEmailTemplateScenario = await buildTIDEmailTemplate(template)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickTIDEmailTemplateScenario,
    buildTIDEmailTemplateScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Update TID Email Template as ${credential}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestTIDEmailTemplate
}
