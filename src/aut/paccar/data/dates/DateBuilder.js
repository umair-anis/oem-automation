'use strict'

let { isEmptyOrWhitespace } = require('../../../../core/model/isEmptyOrWhitespace')

let DateBuilder = (() => {

    let date = {
        month: '',
        day: '',
        year: '',
    }

    this.setMonth = (value = '') => {
        date.month = value
        return this
    }

    this.setDay = (value = '') => {
        date.day = value
        return this
    }

    this.setYear = (value = '') => {
        date.year = value
        return this
    }

    // Return Format: YYYY-MM-DD
    this.getYearFirst = (date) => {
        return `` + date.year.toString() + `-` + date.month.toString() + `-` + date.day.toString()
    }

    // Return Format: MM-DD-YYYY
    this.getMonthFirst_Dash = (date) => {
        return `` + date.month.toString() + `-` + date.day.toString() + `-` + date.year.toString()
    }

    // Return Format: MM/DD/YYYY
    this.getMonthFirst_Slash = (date) => {
        return `` + date.month.toString() + `/` + date.day.toString() + `/` + date.year.toString()
    }

    this.build = () => {

        if(isEmptyOrWhitespace(date.day)) throw new Error(`DateBuilder: Invalid Day`)
        if(isEmptyOrWhitespace(date.month)) throw new Error(`DateBuilder: Invalid Month`)
        if(isEmptyOrWhitespace(date.year)) throw new Error(`DateBuilder: Invalid Year`)

        const month = parseInt(date.month)
        const day = parseInt(date.day)
        if(month < 0 || 12 < month) throw new Error(`DateBuilder: Month is Out-of-Bounds`)
        if(day < 0 || 31 < day) throw new Error(`DateBuilder: Day is Out-of-Bounds`)

        // Convert single digits to file format: MM, DD
        // Ex: 7 converts to 07
        if(date.month.toString().length == 1)
            date.month = "0" + date.month

        if(date.day.toString().length == 1)
            date.day = "0" + date.day

        return Object.freeze(date)
    }

    return this
})

module.exports = {
    DateBuilder
}