'use strict'

let { actions } = require('../../../../core/action/actions')
let { deviceCollectionUI } = require('../../repo/portalSideNavigation/deviceCollection/deviceCollectionUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let validateCollectionNotInTable = async (collectionName = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await deviceCollectionUI().table)
                            .setAction(await actions().searchNotInTable)
                            .setData(collectionName)
                            .setStaticWait(2000)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validate Device Collection is NOT in Table`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateCollectionNotInTable
}