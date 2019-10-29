'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testRunFleetReport } = require('../../test/fleetReport/testRunFleetReport')
let { testValidateFuelEconomy } = require('../../test/fleetReport/testValidateFuelEconomy')

describe('Fleet Report - Functionality', () => {

    const specRunReport = SpecBuilder().setPortal(`Paccar Portal`)
                                                    .setPortalType(`Staging`)
                                                    .setName(`Fleet Report - Functionality - Run a Report`)
                                                    .setTestFunc(testRunFleetReport)
                                                    .setPassingRoles( [`paccaradmin`] )
                                                    .setPassingData( Object.freeze(require('../../testData/fleetReport/passData.json')).data )
                                                    .setFailingData( Object.freeze(require('../../testData/fleetReport/failData.json')).data )
                                                    .build()

    const specFuelEconomy = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Fleet Report - Functionality - Validate Top 5 and Bottom 5 Fuel Economy Contains the Correct VINs`)
                                            .setTestFunc(testValidateFuelEconomy)
                                            .setPassingRoles( [`paccaradmin`] )
                                            .build()

    callSpecs(specRunReport)
    callSpecs(specFuelEconomy)
})