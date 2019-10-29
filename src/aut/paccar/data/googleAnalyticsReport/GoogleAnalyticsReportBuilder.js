'use strict'

let { isEmptyOrWhitespace } = require('../../../../core/model/isEmptyOrWhitespace')
let { isObjectEmpty } = require('../../../../core/model/isObjectEmpty')

let GoogleAnalyticsReportBuilder = (() => {

    let googleAnalyticsReport = {
        userRole: '',
        startDate: '',
        endDate: ''
    }

    this.setUserRole = (value = '') => {
        googleAnalyticsReport.userRole = [value]
        return this
    }

    this.setStartDate = (value = '') => {
        googleAnalyticsReport.startDate = [value]
        return this
    }

    this.setEndDate = (value = '') => {
        googleAnalyticsReport.endDate = [value]
        return this
    }

    this.build = () => {

        if(isEmptyOrWhitespace(googleAnalyticsReport.userRole.toString())) throw new Error(`GARBuilder: Invalid User Role`)
        if(isObjectEmpty(googleAnalyticsReport.startDate.toString())) throw new Error(`GARBuilder: Invalid Start Date`)
        if(isObjectEmpty(googleAnalyticsReport.endDate.toString())) throw new Error(`GARBuilder: Invalid End Date`)

        return Object.freeze(googleAnalyticsReport)
    }

    return this
})

module.exports = {
    GoogleAnalyticsReportBuilder
}