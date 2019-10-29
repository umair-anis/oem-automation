'use strict'

let { buildTestLinkToDetails } = require('./buildTestLinkToDetails')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { VehicleBuilder } = require('../../data/vehicles/VehicleBuilder')
let { BreadcrumbBuilder } = require('../../data/breadcrumb/BreadcrumbBuilder')

let testLinkToVehicleDetails = async (env = {}, credential = '') => {

    const vehicle = await VehicleBuilder().setVin(`1HSJGTKR7CJ628656`)
                                          .build()

    const breadcrumb = await BreadcrumbBuilder().setCrumbs([`Dashboard`, `Vehicles`, `Vehicle Details`])
                                                .build()

    const test = await buildTestLinkToDetails(env, credential, vehicle.vin, vehicle.vin, breadcrumb)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testLinkToVehicleDetails
}