'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterLicenseStatus = async (status = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().fieldLicenseStatus)
                            .setAction(await actions().enter)
                            .setData(status)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter License Status: ${status}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterLicenseStatus
}