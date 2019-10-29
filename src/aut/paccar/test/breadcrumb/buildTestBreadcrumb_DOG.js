'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDOG } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDOG')
const { clickDOGLink } = require('../../scenario/dogs/clickDOGLink')
const { validateCurrentBreadcrumb } = require('../../scenario/breadcrumb/validateCurrentBreadcrumb')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { BreadcrumbBuilder } = require('../../data/breadcrumb/BreadcrumbBuilder')

const buildTestBreadcrumb_DOG = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const tableBreadcrumb = await BreadcrumbBuilder().setCrumbs([`Dashboard`, `Dealer Owner Groups`])
    .build()

  const dogName = [`11`]
  const dogUserBreadcrumb = await BreadcrumbBuilder().setCrumbs([`Dashboard`, `Dealer Owner Groups`, `11`])
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDOGScenario = await clickDOG()
  const validateTableBreadcrumb = await validateCurrentBreadcrumb(tableBreadcrumb.crumbs)
  const clickDOGLinkScenario = await clickDOGLink(dogName)
  const validateDOGUserBreadcrumb = await validateCurrentBreadcrumb(dogUserBreadcrumb.crumbs)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDOGScenario,
    validateTableBreadcrumb,
    clickDOGLinkScenario,
    validateDOGUserBreadcrumb,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Breadcrumb - DOG`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestBreadcrumb_DOG
}
