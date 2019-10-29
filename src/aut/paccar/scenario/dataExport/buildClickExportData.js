'use strict'

let { buildElement } = require('../../../../core/element/buildElement')

let { actions } = require('../../../../core/action/actions')
let { dataExportUI } = require('../../repo/portalSideNavigation/dataExport/dataExportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Click 'More Options' then Export on a particular page
 */
let buildClickExportData = async () => {

    let steps = []

    const exportMoreOptions = await buildElement(`exportMoreOptions`, `xpath`, `//div/md-card/list-toolbar/md-toolbar/div/div/md-menu/button`)

    steps.push(await StepBuilder().setControl(exportMoreOptions)
                            .setAction(await actions().clickExport)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click 'More Options', then 'Export' table data `)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    buildClickExportData
}