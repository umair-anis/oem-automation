'use strict'

let OwnershipRecordBuilder = (() => {

    let historyRecord = {
        customer: '',
        purchaseDate: '',
        changedBy: '',
    }

    this.setCustomer = (value = '') => {
        historyRecord.customer = [value]
        return this
    }

    this.setPurchaseDate = (value = '') => {
        historyRecord.purchaseDate = [value]
        return this
    }

    this.setChangedBy = (value = '') => {
        historyRecord.changedBy = [value]
        return this
    }

    this.build = () => {
        return Object.freeze(historyRecord)
    }

    return this
})

module.exports = {
    OwnershipRecordBuilder
}