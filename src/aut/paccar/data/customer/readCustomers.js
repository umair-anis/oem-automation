'use strict'

let { buildData } = require('../../config/strategy/buildData')
let { CustomerBuilder } = require('./CustomerBuilder')

let readCustomers = async (env = {}, isRandom = false ) => {

    let customers = []
    const content = await buildData(env.name, readDev, readQa, readStaging, readProd)

    for (const customer of content.customers) {
        if(isRandom || customer.name === 'RandomName' ){
            customer.name = customer.name + Math.floor(Date.now() / 1000)
        }


        customers.push(await CustomerBuilder().setName(customer.name)
                                          .setEmail(customer.email)
                                          .setAddress1(customer.address1)
                                          .setAddress2(customer.address2)
                                          .setCity(customer.city)
                                          .setState(customer.state)
                                          .setZipCode(customer.zipCode)
                                          .setCountry(customer.country)
                                          .setPhone(customer.phone)
                                          .setFax(customer.fax)
                                          .setJoinDealerNetwork(customer.joinDealerNetwork)
                                          .build())

    }

    return Object.freeze(customers)
}

let readDev = () => {
    return Object.freeze(require('./devCustomers.json'))
}

let readQa = () => {
    return Object.freeze(require('./qaCustomers.json'))
}

let readStaging = () => {
    return Object.freeze(require('./stagingCustomers.json'))
}

let readProd = () => {
    return Object.freeze(require('./prodCustomers.json'))
}

module.exports = {
     readCustomers
}