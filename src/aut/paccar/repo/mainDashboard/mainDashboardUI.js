'use strict'

let { buildElement } = require('../../../../core/element/buildElement')

/**
 * The UI elements present on the Main Dashboard across all Side Navigation Tabs
 * @returns UI Object
 */
let mainDashboardUI = (() => {

    // Title
    this.title = buildElement(`header`, `css`, `[ng-bind="$ctrl.title"]`)

    // Tables
    this.recommendationTable = buildElement(`recommendationTable`, `xpath`, `//md-card-content/ng-transclude/div[1]/div[1]/table`)
    
    // Vehicle Counts in each Recommendation Category
    this.countStopNow = buildElement(`countStopNow`, `xpath`, `//td[1]//div[@role="button"]//span[@class="recommendation-number ng-binding"]`)
    this.countServiceNow = buildElement(`countServiceNow`, `xpath`, `//td[2]//div[@role="button"]//span[@class="recommendation-number ng-binding"]`)
    this.countServiceSoon = buildElement(`countServiceSoon`, `xpath`, `//td[3]//div[@role="button"]//span[@class="recommendation-number ng-binding"]`)
    this.countInformational = buildElement(`countInformational`, `xpath`, `//td[4]//div[@role="button"]//span[@class="recommendation-number ng-binding"]`)
    this.countNoAction = buildElement(`countNoAction`, `xpath`, `//td[5]//div[@role="button"]//span[@class="recommendation-number ng-binding"]`)
    this.countNotCommunicating = buildElement(`countNotCommunicating`, `xpath`, `//td[6]//div[@role="button"]//span[@class="recommendation-number ng-binding"]`)
    this.countInRepair = buildElement(`countInRepair`, `xpath`, `//td[7]//div[@role="button"]//span[@class="recommendation-number ng-binding"]`)

    // Recommendation Vehicle Lists in each Recommendation Category
    this.buttonStopNow = buildElement(`buttonStopNow`, `xpath`, `//table/tbody/tr[1]/td[1]/button`)
    this.buttonServiceNow = buildElement(`buttonServiceNow`, `xpath`, `//table/tbody/tr[1]/td[2]/button`)
    this.buttonServiceSoon = buildElement(`buttonServiceSoon`, `xpath`, `//table/tbody/tr[1]/td[3]/button`)
    this.buttonInformational = buildElement(`buttonInformational`, `xpath`, `//table/tbody/tr[1]/td[4]/button`)
    this.buttonNoAction = buildElement(`buttonNoAction`, `xpath`, `//table/tbody/tr[1]/td[5]/button`)
    this.buttonNotCommunicating = buildElement(`buttonNotCommunicating`, `xpath`, `//table/tbody/tr[1]/td[6]/button`)
    this.buttonInRepair = buildElement(`buttonInRepair`, `xpath`, `//table/tbody/tr[1]/td[7]/button`)

    // Vehicle View Buttons in each Recommendation Category
    this.buttonViewStopNow = buildElement(`buttonViewStopNow`, `xpath`, `//tr[2]/td[1]/div[3]`)
    this.buttonViewServiceNow = buildElement(`buttonViewServiceNow`, `xpath`, `//tr[2]/td[2]/div[3]`)
    this.buttonViewServiceSoon = buildElement(`buttonViewServiceSoon`, `xpath`, `//tr[2]/td[3]/div[3]`)
    this.buttonViewInformational = buildElement(`buttonViewInformational`, `xpath`, `//tr[2]/td[4]/div[3]`)
    this.buttonViewNoAction = buildElement(`buttonViewNoAction`, `xpath`, `//tr[2]/td[5]/div[3]`)
    this.buttonViewNotCommunicating = buildElement(`buttonViewNotCommunicating`, `xpath`, `//tr[2]/td[6]/div[3]`)
    this.buttonViewInRepair = buildElement(`buttonViewInRepair`, `xpath`, `//tr[2]/td[7]/div[3]`)
    
    
    return this
})

module.exports = {
    mainDashboardUI
}