'use strict'

let { actions } = require('../../../../core/action/actions')
let { filterUI } = require('../../repo/filters/filterUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let enterFilters = async (filters = []) => {

    let steps = []

    // Add "filters" filter chips to the search bar
    for(const filter of filters){
        steps.push(await StepBuilder().setIsCustomAction(true)
                            .setAction(await actions().waitUntilPageLoaded)
                            .build())

        steps.push(await StepBuilder().setControl(await filterUI().filter)
                            .setAction(await actions().enterFilterResultCustomSelect)
                            .setData([ filter ])
                            .build())
    }

    const scenario = await ScenarioBuilder().setName(`Enter Filters: ${filters}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}
                                    
module.exports = {
    enterFilters
}