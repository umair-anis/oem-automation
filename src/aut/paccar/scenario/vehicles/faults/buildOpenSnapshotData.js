'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { clickTabSnapshotData } = require('./clickTabSnapshotData')
let { clickFaultGraph } = require('./clickFaultGraph')

let buildOpenSnapshotData = async (snapshot = {}) => {

    let steps = []

    const clickTabSnapshotDataScenario = await clickTabSnapshotData()
    const clickFaultGraphScenario = await clickFaultGraph(snapshot.dropdown, snapshot.graph)

    const scenarios = [   clickTabSnapshotDataScenario
                        , clickFaultGraphScenario ]

    steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Open Snapshot Data: ${snapshot.dropdown}, ${snapshot.graph}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    buildOpenSnapshotData
}