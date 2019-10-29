'use strict'

let readGoogleAnalyticsReport = () => {
    const googleAnalyticsReport = require('../testData/googleAnalyticsReport.json')
    return Object.freeze(googleAnalyticsReport)
}

module.exports = {
    readGoogleAnalyticsReport
}