'use strict'

let { actions } = require('../../../../../core/action/actions')
let { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let switchSoftwareSlider = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await customersUI().sliderCustomerSoftware)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName('Switch Customer Software OTA Updates Slider')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    switchSoftwareSlider
}