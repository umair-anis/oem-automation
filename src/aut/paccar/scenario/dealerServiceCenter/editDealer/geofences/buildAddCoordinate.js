'use strict'

const { clickAddCoordinate } = require('./clickAddCoordinate')
const { enterGeofenceLatitude } = require('./enterGeofenceLatitude')
const { enterGeofenceLongitude } = require('./enterGeofenceLongitude')
const { clickDone } = require('../clickDone')
const { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

const buildAddCoordinate = async (geofence = {}) => {
  const clickAddCoordinateScenario = await clickAddCoordinate()
  const enterGeofenceLatitudeScenario = await enterGeofenceLatitude(geofence.latitude)
  const enterGeofenceLongitudeScenario = await enterGeofenceLongitude(geofence.longitude)
  const clickDoneScenario = await clickDone()

  const scenarios = [clickAddCoordinateScenario,
    enterGeofenceLatitudeScenario,
    enterGeofenceLongitudeScenario,
    clickDoneScenario]

  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName(`Add Coordinate: ${geofence.latitude}, ${geofence.longitude}`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildAddCoordinate
}
