'use strict'

let { buildElement } = require('../../../../core/element/buildElement')
let { buildElements } = require('../../../../core/element/buildElements')

/**
 * The UI elements present Endpoints and Verifying Endpoints
 * @returns UI Object
 */
let endpointsUI = async () => {

    this.endpointList = await buildElement(`endpointList`, `className`, `md-table`)
    this.endpointHeader = await buildElement(`endpointHeader`, `className`, `page-header-title`)
    this.allEnpointsRows = await buildElements(`allEnpointsRows`, `repeater`, `rowin$ctrl.rows`)
    this.eventTypesInput = await buildElement(`eventTypesInput`, `name`, `eventtype`)
    this.searchInput = await buildElement(`searchInput`, `model`, `$ctrl.searchText`)
    this.endpointsListTableHeader = $('tr').$$('th');

    // Column Numbers
    var queueNameColumn = 0;
    var eventTypeColumn = 1;
    var subscriberColumn = 2;
    var organizationColumn = 3;
    var lastUpdatedColumn = 4;
    var actionsColumn = 5;

    return this
}

module.exports = {
    endpointsUI
}