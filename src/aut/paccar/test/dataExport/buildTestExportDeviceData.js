'use strict'

let { getDataExportFileFormat } = require('../../scenario/dataExport/getDataExportFileFormat')

let { buildValidLogin } = require('../../scenario/login/buildValidLogin')
let { clickDevices } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDevices')
let { clickExport } = require('../../scenario/remoteDiagnostics/clickExport')
let { clickDataExport } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDataExport')
let { verifyFileInExports } = require('../../scenario/dataExport/verifyFileInExports')
let { closeBrowser } = require('../../scenario/browser/closeBrowser')

let { log } = require('../../../../core/logging/log')
let { readBrowsers } = require('../../config/reader/readBrowsers')
let { TestBuilder } = require('../../../../core/test/TestBuilder')

let buildTestExportDeviceData = async (env = {}, credential = '') => {

    const browsers = await readBrowsers()
    const envName = env.name

    const file = await getDataExportFileFormat(`vehicle devices`)

    const validLoginScenario = await buildValidLogin(envName, credential)
    const clickDevicesScenario = await clickDevices()
    const clickExportScenario = await clickExport()
    const clickDataExportScenario = await clickDataExport()
    const verifyFileInExportsScenario = await verifyFileInExports(file)
    const closeBrowserScenario = await closeBrowser()

    const scenarios = [ validLoginScenario, 
                        clickDevicesScenario, 
                        clickExportScenario,
                        clickDataExportScenario,
                        verifyFileInExportsScenario,
                        closeBrowserScenario ]

    const test = await TestBuilder().setBrowsers(browsers)
                                    .setEnvironment(env)
                                    .setLog(log)
                                    .setName(`Testing Data Export - Devices Data to Data Export Page`)
                                    .setScenarios(scenarios)
                                    .build()

    return Object.freeze(test)
}

module.exports = {
    buildTestExportDeviceData
}