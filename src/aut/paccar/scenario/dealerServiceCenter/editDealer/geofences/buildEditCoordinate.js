'use strict'

const { clickEditCoordinate } = require('./clickEditCoordinate')
const { enterGeofenceLatitude } = require('./enterGeofenceLatitude')
const { enterGeofenceLongitude } = require('./enterGeofenceLongitude')
const { clickDone } = require('../clickDone')

const { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

const buildEditCoordinate = async (geofence = {}) => {
  const clickEditCoordinateScenario = await clickEditCoordinate(geofence.name)
  const enterGeofenceLatitudeScenario = await enterGeofenceLatitude(geofence.latitude)
  const enterGeofenceLongitudeScenario = await enterGeofenceLongitude(geofence.longitude)
  const clickDoneScenario = await clickDone()

  const scenarios = [clickEditCoordinateScenario,
    enterGeofenceLatitudeScenario,
    enterGeofenceLongitudeScenario,
    clickDoneScenario]

  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName(`Edit Coordinate: ${geofence.name}`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildEditCoordinate
}
