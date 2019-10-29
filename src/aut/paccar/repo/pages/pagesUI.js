'use strict'

let { buildElement } = require('../../../../core/element/buildElement')
let { buildElements } = require('../../../../core/element/buildElements')

/**
 * The UI elements present for page information and pagination
 * @returns UI Object
 */
let pagesUI = async () => {

    // Filters
    this.densityToggleBtn = await buildElement(`densityToggleBtn`, `css`, `[ng-if="$ctrl.toolbarOptions.settingsButton"]`)
    this.pageSizeButton = await buildElement(`pageSizeButton`, `css`, `[ng-model="$pagination.limit"]`)

    //Page Size
    this.allVehiclesLabel = await buildElement(`name`, `xpath`, `(//input[@type='search'])[2]`);
    //this.pageTenButton = await buildElements(`name`, `repeater`, `pageSizeOption in $ctrl.pageSizeOptions`).get(6);

    //Pagination/High Density
    //this.firstPageButton = await buildElements(`name`, `buttonText`, `skip_previous`).get(1);

    return this
}

module.exports = {
    pagesUI
}