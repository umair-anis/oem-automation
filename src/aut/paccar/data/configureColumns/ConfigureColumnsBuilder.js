'use strict'

let ConfigureColumnsBuilder = (() => {

    let configCol = {
        table: {},
        resetHeader: [],

        removedHeader: [],
        removedColumn: '',

        mixupHeader: [],
        orders: {}
    }

    this.setTable = (value = {}) => {
        configCol.table = value
        return this
    }

    this.setResetHeader = (value = []) => {
        configCol.resetHeader = value
        return this
    }

    this.setRemovedHeader = (header = [], column = '') => {
        configCol.removedHeader = header
        configCol.removedColumn = column
        return this
    }

    this.setMixupHeader = (value = [], mixups = {}) => {
        configCol.mixupHeader = value
        configCol.orders = mixups
        return this
    }

    this.build = () => {

        if(configCol.resetHeader.length == 0) throw new Error(`ConfigureColumnBuilder: Reset Header is Empty`)
        if(configCol.removedHeader.length == 0) throw new Error(`ConfigureColumnBuilder: Removed Header is Empty`)
        if(configCol.mixupHeader.length == 0) throw new Error(`ConfigureColumnBuilder: Mixup Header is Empty`)

        return Object.freeze(configCol)
    }

    return this
})

module.exports = {
    ConfigureColumnsBuilder
}