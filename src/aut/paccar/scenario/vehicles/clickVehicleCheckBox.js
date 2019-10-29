'use strict'

let { actions } = require('../../../../core/action/actions')
let { vehiclesUI } = require('../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickVehicleCheckBox = async (search = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().tableFilter)
                            .setAction(await actions().enterFilterResult)
                            .setData([ search ])
                            .build())

    steps.push(await StepBuilder().setControl(await vehiclesUI().table)
                            .setAction(await actions().clickTableCheckbox)
                            .setData(search)
                            .setStaticWait(2000)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Checkbox with search term: ${search}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickVehicleCheckBox
}