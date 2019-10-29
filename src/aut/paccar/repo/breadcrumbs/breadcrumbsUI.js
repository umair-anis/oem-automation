'use strict'

let { buildElement } = require('../../../../core/element/buildElement')

/**
 * The UI elements present for Verifying Breadcrumbs across the application
 * @returns UI Object
 */
let breadcrumbsUI = (() => {

    this.breadCrumb = buildElement(`breadCrumb`, `css`, `[states="$ctrl.breadcrumbStates"]`)

    return this
})

module.exports = {
    breadcrumbsUI
}