'use strict'

let { callSpecs } = require('../../../../core/spec/callSpecs')
let { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testDeviceVinDiscovery } = require('../../test/devices/testDeviceVinDiscovery')
let { testDevicePMGVersionReq } = require('../../test/devices/testDevicePMGVersionReq')
let { testDeviceForceCall } = require('../../test/devices/testDeviceForceCall')
let { testDeviceClearAgentNVRam } = require('../../test/devices/testDeviceClearAgentNVRam')
let { testDeviceRunDiagnostics } = require('../../test/devices/testDeviceRunDiagnostics')
let { testDeviceViewDebugLogs } = require('../../test/devices/testDeviceViewDebugLogs')

describe('Devices - Features', () => {

    const specVinDisc = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Devices - Features - Vin Discovery`)
                                            .setTestFunc(testDeviceVinDiscovery)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    const specPMGVerReq = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Devices - Features - PMG Version Request`)
                                            .setTestFunc(testDevicePMGVersionReq)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    const specForceCall = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Devices - Features - Force Call`)
                                            .setTestFunc(testDeviceForceCall)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    const specClearNVRam = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Devices - Features - Clear Agent NVRam`)
                                            .setTestFunc(testDeviceClearAgentNVRam)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    const specRunDiag = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Devices - Features - Run Diagnostics`)
                                            .setTestFunc(testDeviceRunDiagnostics)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    const specViewDebugLogs = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Devices - Features - View Debug Logs`)
                                            .setTestFunc(testDeviceViewDebugLogs)
                                            .setPassingRoles( [`peoplenetadmin`] )
                                            .build()

    callSpecs(specVinDisc)
    callSpecs(specPMGVerReq)
    callSpecs(specForceCall)
    callSpecs(specClearNVRam)
    callSpecs(specRunDiag)
    callSpecs(specViewDebugLogs)
})