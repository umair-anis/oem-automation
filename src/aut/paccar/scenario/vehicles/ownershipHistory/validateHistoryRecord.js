'use strict'

let { actions } = require('../../../../../core/action/actions')
let { buildElement } = require('../../../../../core/element/buildElement')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let validateHistoryRecord = async (record = {}) => {

    let steps = []

    // Look at a certain row and do checks to see if there is each element present
    // Since the customer uses a ng-if it is hard to see the text
    // Also, Ownership History does not use a table so it can be abstracted with the table logic
    const recordElement = buildElement(`dateElement`, `xpath`, `//div[@ng-repeat="record in $ctrl.vehicle.basicInfo.ownershipRecords | filter : $ctrl.searchText"]//div[contains(text(), "${record.purchaseDate}")]/..//span[contains(text(), "${record.changedBy}")]`)

    steps.push(await StepBuilder().setControl(await recordElement)
                            .setAction(await actions().isDisplayed)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validate History Record: ${record.customer}, Purchase Date: ${record.date}, Changed By: ${record.change}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateHistoryRecord
}