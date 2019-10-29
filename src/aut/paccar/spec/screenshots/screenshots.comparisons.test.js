'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testDealerMap } = require('../../test/screenshots/testDealerMap')
let { testVehicleFaultGraph } = require('../../test/screenshots/testVehicleFaultGraph')
let { testFleetReportGraphs } = require('../../test/screenshots/testFleetReportGraphs')

describe(`Screenshot Comparisons`, () => {

    const specDealerMap = SpecBuilder().setPortal(`Paccar Portal`)
                                        .setPortalType(`Staging`)
                                        .setName(`Screenshot Comparisons - Dealer Details and Geofences Map`)
                                        .setTestFunc(testDealerMap)
                                        .setPassingRoles( [`paccaradmin`] )
                                        .build()

    const specFaultGraph = SpecBuilder().setPortal(`Paccar Portal`)
                                        .setPortalType(`Staging`)
                                        .setName(`Screenshot Comparisons - Vehicle Fault Snapshot Graphs/Data`)
                                        .setTestFunc(testVehicleFaultGraph)
                                        .setPassingRoles( [`otaTestAdmin`] )
                                        .build()

    const specFleetGraphs = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Screenshot Comparisons - Fleet Report Fuel Economy and Percent Idle Graphs`)
                                            .setTestFunc(testFleetReportGraphs)
                                            .setPassingRoles( [`paccaradmin`] )
                                            .build()

    callSpecs(specDealerMap)
    callSpecs(specFaultGraph)
    callSpecs(specFleetGraphs)
})