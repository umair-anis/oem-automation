'use strict'

let { actions } = require('../../../../core/action/actions')
let { deviceCollectionUI } = require('../../repo/portalSideNavigation/deviceCollection/deviceCollectionUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickCollectionDelete = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await deviceCollectionUI().buttonMoreCollectionOptions)
                            .setAction(await actions().isDisplayed)
                            .build())

    steps.push(await StepBuilder().setControl(await deviceCollectionUI().buttonMoreCollectionOptions)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await deviceCollectionUI().buttonCollectionDelete)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await deviceCollectionUI().buttonConfirmDelete)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Device Collection Delete`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickCollectionDelete
}