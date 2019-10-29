'use strict'

let { buildElement } = require('../../../../core/element/buildElement')

var map = require('../../config/reader/readMap')

/**
 * The UI elements present on the Health Map on the main Dashboard
 * @returns UI Object
 */
let mapUI = (() => {

    // Map
    this.map = buildElement(`map`, `css`, `[class="map-view-container"]`)

    // Tables
    this.frameTable = buildElement(`frameTable`, `xpath`, `//div[@id="FramedCloud_contentDiv"]//table`)

    // Map Filter
    this.buttonFullScreen = buildElement(`buttonFullScreen`, `css`, `[aria-label="{{$ctrl.mapSize}}"]`)

    // Bottom Right Navigation Buttons
    this.buttonZoomIn = buildElement(`buttonZoomIn`, `css`, `[aria-label="add"]`)
    this.buttonZoomOut = buildElement(`buttonZoomOut`, `css`, `[aria-label="remove"]`)
    this.buttonRefresh = buildElement(`buttonRefresh`, `css`, `[aria-label="Refresh Data"]`)
    this.buttonViewSatellite = buildElement(`buttonViewSatellite`, `css`, `[aria-label="View Satellite"]`)
    this.buttonViewPaccarDealers = buildElement(`buttonViewPaccarDealers`, `css`, `[aria-label="View Paccar Dealers"]`)
    this.buttonViewCumminsDistributors = buildElement(`buttonViewCumminsDistributors`, `css`, `[aria-label="View Cummins Distributors"]`)
    this.buttonFrameClose = buildElement(`buttonFrameClose`, `css`, `[id="FramedCloud_close"]`)

    // Vehicles
    this.linkVehiclePin= buildElement(`linkVehiclePin`, `xpath`, `//p//a`)

    // Dealers
    this.linkDealerFlag= buildElement(`linkDealerFlag`, `xpath`, `//b//a`)

    return this
})

module.exports = {
    mapUI
}