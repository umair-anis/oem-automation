'use strict'

let { actions } = require('../../../../core/action/actions')
let { deviceCollectionUI } = require('../../repo/portalSideNavigation/deviceCollection/deviceCollectionUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let validateCollectionInTable = async (collectionName = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await deviceCollectionUI().tableFilter)
                            .setAction(await actions().enterFilterResult)
                            .setData([ collectionName ])
                            .build())

    steps.push(await StepBuilder().setControl(await deviceCollectionUI().table)
                            .setAction(await actions().searchInTable)
                            .setData(collectionName)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validate Device Collection is in Table`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateCollectionInTable
}