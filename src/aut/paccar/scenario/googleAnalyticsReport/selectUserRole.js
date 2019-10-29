'use strict'

let { actions } = require('../../../../core/action/actions')
let { googleAnalyticsReportUI } = require('../../repo/portalSideNavigation/googleAnalyticsReport/googleAnalyticsReportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let { buildElement } = require('../../../../core/element/buildElement')

let selectUserRole = async (userRole = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await googleAnalyticsReportUI().dropdownUserRoles)
                            .setAction(await actions().select)
                            .setData(userRole)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Select Dropdown Option: ${userRole}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    selectUserRole
}