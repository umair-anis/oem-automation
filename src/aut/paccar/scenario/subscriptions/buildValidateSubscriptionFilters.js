'use strict'

let { actions } = require('../../../../core/action/actions')
let { subscriptionsUI } = require('../../repo/portalSideNavigation/subscriptions/subscriptionsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let buildValidateSubscriptionFilters = async () => {

    const filters = [['Expired'], ['Expiring Now'], ['Expiring Soon']]

    let steps = []

    for(let filter of filters){
        steps.push(await StepBuilder().setControl(await subscriptionsUI().table)
                            .setAction(await actions().isCurrentFilter)
                            .setData(filter)
                            .build())
    }

    const scenario = await ScenarioBuilder().setName(`Validate the Subscriptions Table uses the Filters: ${filters}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    buildValidateSubscriptionFilters
}