'use strict'

let { log } = require('../../../../core/logging/log')
let { readBrowsers } = require('../../config/reader/readBrowsers')
let { TestBuilder } = require('../../../../core/test/TestBuilder')

let { buildValidLogin } = require('../../scenario/login/buildValidLogin')
let { buildConfigureColumns_Reset } = require('../../scenario/configureColumns/buildConfigureColumns_Reset')
let { buildConfigureColumns_Remove } = require('../../scenario/configureColumns/buildConfigureColumns_Remove')
let { buildConfigureColumns_Arrows } = require('../../scenario/configureColumns/buildConfigureColumns_Arrows')
let { closeBrowser } = require('../../scenario/browser/closeBrowser')

/**
 * @description Test Configure Columns by comparing the table header with prewritten header data. 
 *              Compare data to the table when the table header has: 
 *               - all of its columns
 *               - a column removed
 *               - a random mixup of column order created from rearrangement operations (this can be dynamically changed at the test level)
 * @param {*} env 
 * @param {Scenario} clickSideLink    To click the write Side Navigation Link to the correct table
 * @param {*} configColumns           Data Builder containing all of the comparison data
 */
let buildTestConfigureColumns = async (env = {}, credential = '', clickSideLink = {}, configColumns = {}) => {

    const browsers = await readBrowsers()
    const envName = env.name

    const validLoginScenario = await buildValidLogin(envName, credential)
    const clickSideLinkScenario = await clickSideLink()
    const buildResetScenario = await buildConfigureColumns_Reset(await configColumns.table, configColumns.resetHeader)
    const buildRemoveScenario = await buildConfigureColumns_Remove(await configColumns.table, configColumns.removedColumn, configColumns.removedHeader)
    const buildArrowsScenario = await buildConfigureColumns_Arrows(await configColumns.table, configColumns.orders, configColumns.mixupHeader)
    const closeBrowserScenario = await closeBrowser()

    const scenarios = [ validLoginScenario, 
                        clickSideLinkScenario, 
                        buildResetScenario,
                        buildRemoveScenario,
                        buildResetScenario,     // Reset after removing a column for more flexibility for column mixups
                        buildArrowsScenario,
                        closeBrowserScenario ]

    const test = await TestBuilder().setBrowsers(browsers)
                                    .setEnvironment(env)
                                    .setLog(log)
                                    .setName(`Testing Configure Columns - Reset, Remove Column, and Mixup Column Order`)
                                    .setScenarios(scenarios)
                                    .build()

    return Object.freeze(test)
}

module.exports = {
    buildTestConfigureColumns
}