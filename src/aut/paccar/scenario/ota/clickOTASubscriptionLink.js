'use strict'

let { actions } = require('../../../../core/action/actions')
let { otaUI } = require('../../repo/ota/otaUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickOTASubscriptionLink = async (search = []) => {

    let steps = []
    steps.push(await StepBuilder().setControl(await otaUI().table)
                            .setAction(await actions().clickTableLink)
                            .setData(search)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Search OTA Subscription Table for search not in table: ${search}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickOTASubscriptionLink
}