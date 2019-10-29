'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickNotificationDetails } = require('./clickNotificationDetails')
let { clickJSONTab } = require('./clickJSONTab')
let { scrollToJSON } = require('./scrollToJSON')
let { verifyJSON } = require('./verifyJSON')
let { clickHTMLTab } = require('./clickHTMLTab')

let buildNotificationLog = async (notificationCard = {}) => {

    // Scenarios
    const clickNotificationScenario = await clickNotificationDetails(notificationCard.title)
    const clickJSONTabScenario = await clickJSONTab()
    const scrollToJSONScenario = await scrollToJSON()
    const verifyJSONScenario = await verifyJSON(notificationCard.json)
    const clickHTMLTabScenario = await clickHTMLTab()

    const scenarios = [   clickNotificationScenario
                        , clickJSONTabScenario
                        , scrollToJSONScenario
                        , verifyJSONScenario
                        , clickHTMLTabScenario ]

    // Steps:
    // 1. Click a Notification Log's View Details
    // 2. Click JSON Tab
    // 3. Click HTML Tab
    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Verify Notification Details with title: ${notificationCard.title}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildNotificationLog
}