'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { clickTabNotificationPortal } = require('./clickTabNotificationPortal')
let { clickTabOEMPortal } = require('./clickTabOEMPortal')
let { clickTabPortalCore } = require('./clickTabPortalCore')
let { clickTabSupportal } = require('./clickTabSupportal')
let { validateContents } = require('./validateContents')

let buildValidateLogs = async () => {

    // Scenarios
    const clickTabNotificationPortalScenario = await clickTabNotificationPortal()
    const validateContents1 = await validateContents(1, [``])

    const clickTabOEMPortalScenario = await clickTabOEMPortal()
    const validateContents2 = await validateContents(2, [``])

    const clickTabPortalCoreScenario = await clickTabPortalCore()
    const validateContents3 = await validateContents(3, [``])

    const clickTabSupportalScenario = await clickTabSupportal()
    const validateContents4 = await validateContents(4, [``])
    
    const scenarios = [   clickTabNotificationPortalScenario 
                        , validateContents1
                        , clickTabOEMPortalScenario
                        , validateContents2
                        , clickTabPortalCoreScenario
                        , validateContents3
                        , clickTabSupportalScenario
                        , validateContents4 ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Validate Change Logs Content in each Portal Tab`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildValidateLogs
}