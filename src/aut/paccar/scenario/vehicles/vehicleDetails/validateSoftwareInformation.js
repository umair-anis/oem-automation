'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let { buildElement } = require('../../../../../core/element/buildElement')

let validateSoftwareInformation = async (info = []) => {

    let steps = []

    const textRecommendation = buildElement(`textRecommendation`, `xpath`, `//span[@ng-bind="$ctrl.customerOptOut ? $ctrl.dispositions['CUSTOMER_OPT_OUT'].title : $ctrl.dispositions[$ctrl.vehicle.softwareInfo.softwareUpdateStatus].title"][contains(text(), "${info}")]`)
    steps.push(await StepBuilder().setControl(await textRecommendation)
                            .setAction(await actions().isDisplayed)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validate Vehicle Software Information is: ${info}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateSoftwareInformation
}