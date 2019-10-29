'use strict'

let { actions } = require('../../../../core/action/actions')
let { oemsUI } = require('../../repo/portalSideNavigation/oems/oemsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let enterFactoryInformation = async (city = [], code = [], longitude = [], latitiude = []) => {

    let steps = []
    steps.push(await StepBuilder().setControl(await oemsUI().fieldCity)
                            .setAction(await actions().enter)
                            .setData(city)
                            .build())

    steps.push(await StepBuilder().setControl(await oemsUI().fieldCode)
                            .setAction(await actions().enter)
                            .setData(code)
                            .build())

    steps.push(await StepBuilder().setControl(await oemsUI().fieldLongitude)
                            .setAction(await actions().enter)
                            .setData(longitude)
                            .build())

    steps.push(await StepBuilder().setControl(await oemsUI().fieldLatitude)
                            .setAction(await actions().enter)
                            .setData(latitiude)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Factory City: ${city}, Code ${code}, Long/Lat: [${longitude}, ${latitiude}]`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterFactoryInformation
}