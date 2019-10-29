'use strict'

let { buildTestLinkToDetails } = require('./buildTestLinkToDetails')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { CustomerBuilder } = require('../../data/customer/CustomerBuilder')
let { VehicleBuilder } = require('../../data/vehicles/VehicleBuilder')
let { BreadcrumbBuilder } = require('../../data/breadcrumb/BreadcrumbBuilder')

let testLinkToCustomerDetails = async (env = {}, credential = '') => {

    const vehicle = await VehicleBuilder().setVin(`1HSJGTKT7DJ149215`)
                                          .build()

    const customer = await CustomerBuilder().setName(`12345c`)
                                            .build()

    const breadcrumb = await BreadcrumbBuilder().setCrumbs([`Dashboard`, `Customers`, `Customer Details`])
                                                .build()

    const test = await buildTestLinkToDetails(env, credential, vehicle.vin, customer.name, breadcrumb)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testLinkToCustomerDetails
}