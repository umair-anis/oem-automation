'use strict'

let { log } = require('../../../../core/logging/log')
let { readBrowsers } = require('../../config/reader/readBrowsers')
let { TestBuilder } = require('../../../../core/test/TestBuilder')

let { buildValidLogin } = require('../../scenario/login/buildValidLogin')
let { sendRestPost } = require('../../scenario/rest/sendRestPost')
let { sendRestGet } = require('../../scenario/rest/sendRestGet')
let { closeBrowser } = require('../../scenario/browser/closeBrowser')

let { RequestBuilder } = require('../../data/rest/RequestBuilder')
// Fault Code Required Format?
var fault = require('../../data/faults/fault.json')

let buildTestGetVehicleFault = async (env = {}, credential = '') => {

    const browsers = await readBrowsers()
    const envName = env.name

    fault.eventID = "1234567890987654321"

    console.log(`fault: ${JSON.stringify(fault.faultCode)}`)

    const post = await RequestBuilder().setURL(`https://entity-search.dev.connectedfleet.io/faultlogs`)
                                          .setContentType(`application/json`)
                                          .setData(JSON.stringify(fault))
                                          .build()

    const key = `peoplenet:faultlog:14a48fbb-6611-404b-a48f-bb6611204b7a`
    const get = await RequestBuilder().setURL(`https://entity-search.dev.connectedfleet.io/faultlogs/${key}`)
                                          .setContentType(`application/json`)
                                          .build()

    const validLoginScenario = await buildValidLogin(envName, credential)
    const postFaultScenario = await sendRestPost(post)
    const getFaultScenario = await sendRestGet(get)
    const closeBrowserScenario = await closeBrowser()

    const scenarios = [   validLoginScenario
                        , postFaultScenario
                        , getFaultScenario
                        , closeBrowserScenario ]

    const test = await TestBuilder().setLog(log)
                              .setName(`Testing Back-End Faults - Get Vehicle Fault`)
                              .setBrowsers(browsers)
                              .setScenarios(scenarios)
                              .setEnvironment(env)
                              .build()

    return Object.freeze(test)
}

module.exports = {
    buildTestGetVehicleFault
}