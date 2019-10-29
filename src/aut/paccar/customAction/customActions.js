'use strict'

let customActions = (() => {

    this.clickDealerEditMainButton = require('./dealer/clickDealerEditMainButton').clickDealerEditMainButton
    this.clickCancelButton = require('./dealer/clickCancelButton').clickCancelButton
    this.clickConfirmButton = require('./dealer/clickConfirmButton').clickConfirmButton
    this.clickDoneButton = require('./dealer/clickDoneButton').clickDoneButton
    this.clickIconButton = require('./dealer/clickIconButton').clickIconButton
    this.clickMainCancelButton = require('./dealer/clickMainCancelButton').clickMainCancelButton
    this.clickPrimaryButton = require('./dealer/clickPrimaryButton').clickPrimaryButton
    this.clickRadioButton = require('./dealer/clickRadioButton').clickRadioButton
    this.clickSaveButton = require('./dealer/clickSaveButton').clickSaveButton
    this.enterInput = require('./dealer/enterInput').enterInput
    this.enterSelect = require('./dealer/enterSelect').enterSelect
    this.executeFilter = require('./dealer/executeFilter').executeFilter
    this.tabBackFromCancelButton = require('./dealer/tabBackFromCancelButton').tabBackFromCancelButton
    this.tabBackFromDoneButton = require('./dealer/tabBackFromDoneButton').tabBackFromDoneButton

    // Vehicle
    this.validateVehicleDetails = require('./vehicle/validateVehicleDetails').validateVehicleDetails

    // Fleet Report
    this.validateFuelEconomyTable = require('./fleetReport/validateFuelEconomyTable').validateFuelEconomyTable

    // Remote Diagnostics
    this.validateVinsProcessed = require('./remoteDiagnostics/validateVinsProcessed').validateVinsProcessed

    // Rest Calls
    this.sendGet = require('./rest/sendGet').sendGet
    this.sendPost = require('./rest/sendPost').sendPost
    this.sendPut = require('./rest/sendPut').sendPut

    return this
})

module.exports = {
    customActions
}