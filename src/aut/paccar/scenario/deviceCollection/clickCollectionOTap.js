'use strict'

let { actions } = require('../../../../core/action/actions')
let { deviceCollectionUI } = require('../../repo/portalSideNavigation/deviceCollection/deviceCollectionUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickCollectionOTap = async (collectionName = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await deviceCollectionUI().tableFilter)
                            .setAction(await actions().enterFilterResult)
                            .setData([ collectionName ])
                            .build())

    steps.push(await StepBuilder().setControl(await deviceCollectionUI().table)
                            .setAction(await actions().clickTableCheckbox)
                            .setData(collectionName)
                            .build())

    steps.push(await StepBuilder().setControl(await deviceCollectionUI().buttonMoreCollectionOptions)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await deviceCollectionUI().buttonCollectionOTap)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Device Collection OTap`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickCollectionOTap
}