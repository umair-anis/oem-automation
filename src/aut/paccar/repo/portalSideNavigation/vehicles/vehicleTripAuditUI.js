'use strict'

let { buildElement } = require('../../../../core/element/buildElement')
let { buildElements } = require('../../../../core/element/buildElements')

/**
 * The UI elements present for Ownership History
 * @returns UI Object
 */
let vehicleTripAuditUI = async () => {

    this.eventTypeDropdown = await buildElement(`eventTypeDropdown`, `model`, `$ctrl.eventType`)
    this.valueFromEventTypeDropdown = await buildElements(`valueFromEventTypeDropdown`, `xpath`, `//md-select-menu/md-content/md-option`)
    this.allEventType = await buildElement(`allEventType`, `css`, `[ng-value="$ctrl.tripAuditEvents.eventTypes"]`)
    //this.oemTripStart = await buildElements(`oemTripStart`, `repeater`, `eventTypein$ctrl.tripAuditEvents.eventTypes`).get(0)
    //this.oemTripEnd = await buildElements(`oemTripEnd`, `repeater`, `eventTypein$ctrl.tripAuditEvents.eventTypes`).get(1)
    //this.oemTripPeriodic = await buildElements(`oemTripPeriodic`, `repeater`, `eventTypein$ctrl.tripAuditEvents.eventTypes`).get(2)
    //this.oemFaultCode = await buildElements(`oemFaultCode`, `repeater`, `eventTypein$ctrl.tripAuditEvents.eventTypes`).get(3)
    //this.oemClearFaults = await buildElements(`oemClearFaults`, `repeater`, `eventTypein$ctrl.tripAuditEvents.eventTypes`).get(4)
    //this.oemFaultRemoved = await buildElements(`oemFaultRemoved`, `repeater`, `eventTypein$ctrl.tripAuditEvents.eventTypes`).get(5)
    //this.oemDiagnosticToolStatus = await buildElements(`oemDiagnosticToolStatus`, `repeater`, `eventTypein$ctrl.tripAuditEvents.eventTypes`).get(6)
    //this.vinDiscovery = await buildElements(`vinDiscovery`, `repeater`, `eventTypein$ctrl.tripAuditEvents.eventTypes`).get(7)
    this.viewIncludedEventTypeButton = await buildElement(`viewIncludedEventTypeButton`, `xpath`, `//button[@ng-click='$ctrl.form.$valid&&$ctrl.showEventTypes($event)']`)
    this.noTripEventsFoundmessage = await buildElement(`noTripEventsFoundmessage`, `is.noTripEventsFoundmessage=element(By.xpath`, `//h3`)
    this.allEventRows = await buildElements(`allEventRows`, `css`, `[md-virtual-repeat="eventin$ctrl.dynamicItems"]`)
    this.searchButton = await buildElement(`searchButton`, `css`, `[type="submit"]`)
    this.eventTypeFromTable = await buildElements(`eventTypeFromTable`, `xpath`, `//tr/td[2]`)
    this.vinInput = await buildElement(`vinInput`, `xpath`, `//input[@name='vin']`)
    this.showEventJsonButtons = await buildElements(`showEventJsonButtons`, `xpath`, `//button[@ng-click='$ctrl.showJson(event,$event)']`)
    this.tripAuditJsonData = await buildElement(`tripAuditJsonData`, `id`, `tripAuditJSON`)
    this.copyToClipboardButtom = await buildElement(`copyToClipboardButtom`, `id`, `clipboardBtn`)
    this.okButtom = await buildElement(`okButtom`, `xpath`, `//button[@ng-click='dialogCtrl.closeDialog()']`)

    this.tripAuditcolumns = {
        tripIdColumn: {value: 1, name: 'Trip id'},
        tripEventColumn: {value: 1, name: 'Trip Event'},
        DsnColumn: {value: 1, name: 'DSN'},
        triggerDataColumn: {value: 1, name: 'Trigger Data'},
        SpnColumn: {value: 1, name: 'SPN'},
        FmiColumn: {value: 1, name: 'FMI'},
        latLonColumn: {value: 1, name: 'Lat, Lon'},
        altitudeColumn: {value: 1, name: 'Altitude'},
        headingColumn: {value: 1, name: 'Heading'},
    };

    return this
}

module.exports = {
    vehicleTripAuditUI
}