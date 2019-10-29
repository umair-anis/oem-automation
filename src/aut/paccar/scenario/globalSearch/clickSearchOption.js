'use strict'

let { actions } = require('../../../../core/action/actions')
let { buildElement } = require('../../../../core/element/buildElement')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickSearchOption = async (index = 1) => {

    let steps = []

    const optionList = buildElement(`optionList`, `xpath`, `//md-virtual-repeat-container[@aria-hidden="false"]`)
    steps.push(await StepBuilder().setControl(await optionList)
                                .setAction(await actions().waitUntilVisible)
                                .build())

    // Scroll into each element leading up to the index option
    // This will bring the option into view and make it visible for Selenium to interact with
    if(index+1 > 4){
        for(var i = 1; i < index+1; i++){
            const optionElement = buildElement(`optionElement`, `xpath`, `//ul//li[@md-virtual-repeat][${i}]//div`)
            steps.push(await StepBuilder().setControl(await optionElement)
                                        .setAction(await actions().scrollToElement)
                                        .build())
        }
    }

    // Click the (was hidden) option
    const optionElement = buildElement(`optionElement`, `xpath`, `//ul//li[@md-virtual-repeat][${index+1}]//div`)
    steps.push(await StepBuilder().setControl(await optionElement)
                                  .setAction(await actions().click)
                                  .build())

    const scenario = await ScenarioBuilder().setName(`Click ${index+1} indexed Dropdown Search Result`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickSearchOption
}