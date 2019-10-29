'use strict'

let { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

let { clickTagsTab } = require('./clickTagsTab')
let { deleteTag } = require('./deleteTag')

let buildDeleteTag = async (tag = {}) => {

    // Scenarios
    const clickTagsTabScenario = await clickTagsTab()
    const deleteTagScenario = await deleteTag(tag.key)

    // Steps:
    // 1. Go to Tags Tab
    // 2. Delete Tag 'key'
    const steps = await appendScenarios([ clickTagsTabScenario
                                        , deleteTagScenario ])

    const scenario = await ScenarioBuilder().setName(`Delete a Tag: ${tag.key}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildDeleteTag
}