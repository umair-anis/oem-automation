'use strict'

let FleetReportBuilder = (() => {

    let fleetReport = {
        engineFamily: '',
        engineModelYear: '',
        duration: '',
        startDate: '',
        endDate: '',

        top5: [],
        bottom5: []
    }

    this.setEngineFamily = (value = '') => {
        fleetReport.engineFamily = [value]
        return this
    }

    this.setEngineModelYear = (value = '') => {
        fleetReport.engineModelYear = [value]
        return this
    }

    this.setDuration = (value = '') => {
        fleetReport.duration = [value]
        return this
    }

    this.setStartDate = (value = '') => {
        fleetReport.startDate = [value]
        return this
    }

    this.setEndDate = (value = '') => {
        fleetReport.endDate = [value]
        return this
    }

    this.setTop5 = (value = []) => {
        fleetReport.top5 = value
        return this
    }


    this.setBottom5 = (value = []) => {
        fleetReport.bottom5 = value
        return this
    }


    this.build = () => {
        return Object.freeze(fleetReport)
    }

    return this
})

module.exports = {
    FleetReportBuilder
}