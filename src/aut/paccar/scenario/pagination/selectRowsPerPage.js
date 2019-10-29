'use strict'

let { actions } = require('../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let selectRowsPerPage = async (rowsPerPage = ``) => {

    let steps = []
    steps.push(await StepBuilder().setIsCustomAction(true)
                                  .setAction(await actions().waitUntilPageLoaded)
                                  .build())
                                  
    // Changing the number of rows in a table is pretty funky, so static waits are convenient for this situation
    steps.push(await StepBuilder().setIsCustomAction(true)
                                  .setAction(await actions().clickRowsPerPageDropdown)
                                  .setStaticWait(2000)
                                  .build())
    steps.push(await StepBuilder().setIsCustomAction(true)
                                  .setAction(await actions().clickDropdownOption)
                                  .setData([rowsPerPage])
                                  .setStaticWait(1000)
                                  .build())

    const scenario = await ScenarioBuilder().setName(`Select Rows Per Page: ${rowsPerPage}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    selectRowsPerPage
}