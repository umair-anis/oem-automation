'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { validateIsCurrentURL } = require('../../scenario/urls/validateIsCurrentURL')
const { clickDiagnosticAssistant } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDiagnosticAssistant')
const { switchBrowserTabs } = require('../../scenario/browser/switchBrowserTabs')
const { waitForAssistantLogin } = require('../../scenario/diagnosticAssistant/waitForAssistantLogin')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { URLBuilder } = require('../../data/url/URLBuilder')

const buildTestDiagnosticAssistant = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  // Tab Index: index of the tab position.
  // Loading the Diagnostic Assistant opens a new tab so (current tab index + 1)
  const paccarURL = await URLBuilder().setText(`http://paccar-portal-staging.connectedfleet.io`)
    .setTabIndex(0)
    .build()

  const diagAssistantURL = await URLBuilder().setText(`https://www.epaccar.com`)
    .setTabIndex(1)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const validateIsPaccarPortal = await validateIsCurrentURL(paccarURL.text)

  const clickDiagnosticAssistantScenario = await clickDiagnosticAssistant()
  const switchBrowserTabsScenario = await switchBrowserTabs(diagAssistantURL.tabIndex)
  const waitForAssistantLoginScenario = await waitForAssistantLogin()
  const validateIsDiagnosticAssistant = await validateIsCurrentURL(diagAssistantURL.text)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    validateIsPaccarPortal,
    clickDiagnosticAssistantScenario,
    switchBrowserTabsScenario,
    waitForAssistantLoginScenario,
    validateIsDiagnosticAssistant,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Diagnostic Assistant - Click Diagnostic Assistant, Switch Driver to new Tab, Confirm URL Change`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestDiagnosticAssistant
}
