'use strict'

const { buildTestGoogleReport } = require('./buildTestGoogleReport')
const { invokeTest } = require('../../../../core/test/invokeTest')
const { logTestData } = require('../../../../core/logging/logTestData')

let { GoogleAnalyticsReportBuilder } = require('../../data/googleAnalyticsReport/GoogleAnalyticsReportBuilder')

let testGoogleReport = async (env = {}, credential = '', data = {}) => {

    logTestData(data)

    const report = await GoogleAnalyticsReportBuilder().setUserRole(data.userRole)
                                                       .setStartDate(data.startDate)
                                                       .setEndDate(data.endDate)
                                                       .build()

    const test = await buildTestGoogleReport(env, credential, report)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
  testGoogleReport
}
