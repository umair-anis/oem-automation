'use strict'

let { log } = require('../../../../core/logging/log')
let { readBrowsers } = require('../../config/reader/readBrowsers')
let { TestBuilder } = require('../../../../core/test/TestBuilder')

let { buildValidLogin } = require('../../scenario/login/buildValidLogin')
let { enterGlobalSearch } = require('../../scenario/globalSearch/enterGlobalSearch')
let { clickGeneralSearch } = require('../../scenario/globalSearch/clickGeneralSearch')
let { validateNoSearchResults } = require('../../scenario/globalSearch/validateNoSearchResults')
let { closeBrowser } = require('../../scenario/browser/closeBrowser')

let buildTestSearchWithNoResults = async (env = {}, credential = '', search = {}) => {

    const browsers = await readBrowsers()
    const envName = env.name

    const validLoginScenario = await buildValidLogin(envName, credential)
    const enterGlobalSearchScenario = await enterGlobalSearch(search.text)
    const clickGeneralSearchScenario = await clickGeneralSearch()
    const validateNoSearchResultsScenario = await validateNoSearchResults()
    const closeBrowserScenario = await closeBrowser()

    const scenarios = [   validLoginScenario
                        , enterGlobalSearchScenario
                        , clickGeneralSearchScenario
                        , validateNoSearchResultsScenario
                        , closeBrowserScenario ]

    const test = await TestBuilder().setLog(log)
                              .setName(`Testing Global Search - Validate Search: ${search.text} leads to 'No Search Results Found'`)
                              .setBrowsers(browsers)
                              .setScenarios(scenarios)
                              .setEnvironment(env)
                              .build()

    return Object.freeze(test)
}

module.exports = {
    buildTestSearchWithNoResults
}