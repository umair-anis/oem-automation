'use strict'

let { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

let { clickTagsTab } = require('./clickTagsTab')
let { clickAddTag } = require('./clickAddTag')
let { enterTagKey } = require('./enterTagKey')
let { enterTagValue } = require('./enterTagValue')
let { clickTagSave } = require('./clickTagSave')

let buildAddTag = async (tag = {}) => {

    // Scenarios
    const clickTagsTabScenario = await clickTagsTab()
    const clickAddTagScenario = await clickAddTag()
    const enterTagKeyScenario = await enterTagKey(tag.key)
    const enterTagValueScenario = await enterTagValue(tag.value)
    const clickTagSaveScenario = await clickTagSave()

    const scenarios = [   clickTagsTabScenario
                        , clickAddTagScenario
                        , enterTagKeyScenario
                        , enterTagValueScenario
                        , clickTagSaveScenario ]

    // Steps:
    // 1. Go to Tags Tab
    // 2. Click 'Add Tag'
    // 3. Enter Tag Credentials
    // 4. Save the new Tag
    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Add a Tag: ${tag.key}, ${tag.value}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildAddTag
}