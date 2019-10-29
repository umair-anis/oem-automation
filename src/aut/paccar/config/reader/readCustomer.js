'use strict'

let readCustomer = () => {
    const customer = require('../customer.json')
    return Object.freeze(customer)
}

module.exports = {
    readCustomer
}