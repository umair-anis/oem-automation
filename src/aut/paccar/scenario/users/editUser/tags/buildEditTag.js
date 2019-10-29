'use strict'

let { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

let { clickTagsTab } = require('./clickTagsTab')
let { editTag } = require('./editTag')
let { enterTagKey } = require('./enterTagKey')
let { enterTagValue } = require('./enterTagValue')
let { clickTagSave } = require('./clickTagSave')

let buildEditTag = async (tag = {}, editedTag = {}) => {

    // Scenarios
    const clickTagsTabScenario = await clickTagsTab()
    const editTagScenario = await editTag(tag.key)
    const enterTagKeyScenario = await enterTagKey(editedTag.key)
    const enterTagValueScenario = await enterTagValue(editedTag.value)
    const clickTagSaveScenario = await clickTagSave()

    const scenarios = [   clickTagsTabScenario
                        , editTagScenario
                        , enterTagKeyScenario
                        , enterTagValueScenario
                        , clickTagSaveScenario ]

    // Steps:
    // 1. Go to Tags Tab
    // 2. Click tag 'key'
    // 3. Enter new Tag Credentials
    // 4. Save the Tag
    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Edit a Tag: ${tag.key} to ${editedTag.key}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildEditTag
}