'use strict'

let { isEmptyOrWhitespace } = require('../../../../core/model/isEmptyOrWhitespace')

let DataImportBuilder = (() => {

    let dataImport = {
        jobName: '',
        executionID: '',
        info: ''
    }

    this.setJobName = (value = '') => {
        dataImport.jobName = [value]
        return this
    }

    this.setExectionID = (value = '') => {
        dataImport.executionID = [value]
        return this
    }

    this.setInfo = (value = '') => {
        dataImport.info = [value]
        return this
    }

    this.build = () => {

        if(isEmptyOrWhitespace(dataImport.jobName.toString())) throw new Error(`DataImportBuilder: Invalid Job Name`)

        return Object.freeze(dataImport)
    }

    return this
})

module.exports = {
    DataImportBuilder
}