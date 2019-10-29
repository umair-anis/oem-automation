'use strict'

let { buildTestRunFleetReport } = require('./buildTestRunFleetReport')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { FleetReportBuilder } = require('../../data/fleetReport/FleetReportBuilder')

let testRunFleetReport = async (env = {}, credential = '', data = {}) => {

    const fleetReport = await FleetReportBuilder().setEngineFamily(data.engineFamily)
                                                  .setEngineModelYear(data.engineModelYear)
                                                  .setDuration(data.duration)
                                                  .setStartDate(data.startDate)
                                                  .setEndDate(data.endDate)
                                                  .build()

    const test = await buildTestRunFleetReport(env, credential, fleetReport)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testRunFleetReport
}