'use strict'

let { actions } = require('../../../../../core/action/actions')
let { usersUI } = require('../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

/**
 * 'Always Collapse navigation bar' checkbox is unchecked by default
 */
let enterPreferencesInformation = async (preferences = {}, editPreferences = false) => {

    let steps = []

    // If we want to check 'Hide Join-All Customers and Vehicles' box then click it, otherwise leave it
    if(preferences.hideJoinAll){
        steps.push(await StepBuilder().setControl(await usersUI().checkboxCollapseNavBar)
                            .setAction(await actions().click)
                            .build())
    }

    // If we want to check 'Always Collapse navigation bar' box then click it, otherwise leave it
    if(preferences.alwaysCollapseBar){
        steps.push(await StepBuilder().setControl(await usersUI().checkboxCollapseNavBar)
                            .setAction(await actions().click)
                            .build())
    }

    // Specify a Map Center Type
    steps.push(await StepBuilder().setControl(await usersUI().dropdownMapCenter)
                            .setAction(await actions().select)
                            .setData(preferences.mapCenter)
                            .build())

    // Specify a Language
    steps.push(await StepBuilder().setControl(await usersUI().dropdownLanguage)
                            .setAction(await actions().select)
                            .setData(preferences.language)
                            .build())

    // Specify a Preferred Unit of Measure if this is not in edit mode
    if(!editPreferences){
        // Specify a Preferred Unit of Measure
        steps.push(await StepBuilder().setControl(await usersUI().dropdownUnitOfMeasure)
                                        .setAction(await actions().select)
                                        .setData(preferences.measure)
                                        .build())
    }

    // Specify a Unit of Distance
    steps.push(await StepBuilder().setControl(await usersUI().dropdownUnitDistance)
                            .setAction(await actions().select)
                            .setData(preferences.distance)
                            .build())

    // Specify a Unit of Volume
    steps.push(await StepBuilder().setControl(await usersUI().dropdownUnitVolume)
                            .setAction(await actions().select)
                            .setData(preferences.volume)
                            .build())

    // Specify a Unit of Fuel Economy
    steps.push(await StepBuilder().setControl(await usersUI().dropdownUnitFuel)
                            .setAction(await actions().select)
                            .setData(preferences.fuelEconomy)
                            .build())

    // Specify a Unit of Temperature
    steps.push(await StepBuilder().setControl(await usersUI().dropdownUnitTemperature)
                            .setAction(await actions().select)
                            .setData(preferences.temperature)
                            .build())

    // Specify a Unit of Pressure
    steps.push(await StepBuilder().setControl(await usersUI().dropdownUnitPressure)
                            .setAction(await actions().select)
                            .setData(preferences.pressure)
                            .build())

    // Specify a Unit of Mass
    steps.push(await StepBuilder().setControl(await usersUI().dropdownUnitMass)
                            .setAction(await actions().select)
                            .setData(preferences.mass)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Preferences Information`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterPreferencesInformation
}