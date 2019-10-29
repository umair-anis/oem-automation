'use strict'

let { log } = require('../../../../core/logging/log')
let { readBrowsers } = require('../../config/reader/readBrowsers')
let { TestBuilder } = require('../../../../core/test/TestBuilder')

let { buildValidLogin } = require('../../scenario/login/buildValidLogin')
let { buildSpanPages } = require('../../scenario/pagination/buildSpanPages')
let { buildSelectPage } = require('../../scenario/pagination/buildSelectPage')
let { buildSelectRowsPerPage } = require('../../scenario/pagination/buildSelectRowsPerPage')
let { closeBrowser } = require('../../scenario/browser/closeBrowser')

let buildTestDeviceTablePagination = async (env = {}, credential = '', clickSideLink = {}, rowsPerPage = []) => {

    const browsers = await readBrowsers()
    const envName = env.name

    const validLoginScenario = await buildValidLogin(envName, credential)
    const clickCustomersScenario = await clickSideLink()
    const buildSpanPagesScenario = await buildSpanPages()
    const buildSelectPageScenario = await buildSelectPage([`9`, `4`, `1`])
    const buildSelectRowsPerPageScenario = await buildSelectRowsPerPage(rowsPerPage)
    const closeBrowserScenario = await closeBrowser()

    const scenarios = [   validLoginScenario
                        , clickCustomersScenario 
                        , buildSpanPagesScenario 
                        , buildSelectPageScenario
                        , buildSelectRowsPerPageScenario
                        , closeBrowserScenario ]

    const test = await TestBuilder().setLog(log)
                              .setName(`Testing Pagination - Device/Device Collection Table`)
                              .setBrowsers(browsers)
                              .setScenarios(scenarios)
                              .setEnvironment(env)
                              .build()

    return Object.freeze(test)
}

module.exports = {
    buildTestDeviceTablePagination
}