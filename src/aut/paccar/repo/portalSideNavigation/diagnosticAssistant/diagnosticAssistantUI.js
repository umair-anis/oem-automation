'use strict'

let { buildElement } = require('../../../../../core/element/buildElement')

/**
 * The UI elements present for Diagnostic Assistant
 * @returns UI Object
 */
let diagnosticAssistantUI = (() => {

    // E Paccar Login UI
    const title = `Log on to Diagnostic Assistant using your ePortal Id`

    this.loginTitle = buildElement(`loginTitle`, `xpath`, `//span[contains(text(), "${title}")]`)

    return this
})

module.exports = {
    diagnosticAssistantUI
}