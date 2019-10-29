'use strict'

let { actions } = require('../../../../../core/action/actions')
let { subscriptionsUI } = require('../../../repo/portalSideNavigation/subscriptions/subscriptionsUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickShowList = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await subscriptionsUI().buttonShowList)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Show List`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickShowList
}