'use strict'

let { buildElement } = require('../../../../core/element/buildElement')
let { buildElements } = require('../../../../core/element/buildElements')

/**
 * The UI elements present on the analytics pages
 * @returns UI Object
 */
let analyticsUI = async () => {

    this.frameName = "post-frame";

    this.overviewlink = await buildElement(`overviewlink`, `xpath`, `//a[@href= '/']`);
    this.customerLink = await buildElement(`customerLink`, `xpath`, `//a[@href= '/Home/Customer']`);
    this.diagnosticLink = await buildElement(`diagnosticLink`, `xpath`, `//a[@href= '/Home/DiagnosticsQuickViews']`);

    return this
}

module.exports = {
    analyticsUI
}