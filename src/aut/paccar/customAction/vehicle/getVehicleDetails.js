'use strict'

const { By } = require('selenium-webdriver')

const { MessageBuilder } = require('../../../../core/layer/MessageBuilder')
const { ResultBuilder } = require('../../../../core/result/ResultBuilder')

/**
 * @description Vehicle Details page makes up all of the detailed informatoin about a vehicle.
 *              Vehicle Details is comprised of:
 *                  - Recommendation
 *                  - Last Location: address
 *                  - Vehicle Information: customer, year make model, unit number, vin, dsn, subscription info, etc.
 *                  - Vehicle Performance: fuel economy, percent idle, engine, hours
 * @param {*} msg
 */
const getVehicleDetails = async (msg = {}) => {
  const parent = msg.parent

  var vehicleDetails = {
    // Recommendation
    recommendation: '',

    // Last Location
    address: '',
    city: '',
    time: '',

    // Vehicle Information
    customer: '',
    yearMakeModel: '',
    unitNumber: '',
    description: '',
    vin: '',
    dsn: '',
    mileage: '',
    engineModel: '',
    engineSerialNumber: '',
    subscriptionStatus: '',
    subscriptionEnd: '',
    pmgFirmware: '',
    afterTreatmentID: '',

    // Vehicle Performance
    fuelEconomy: '',
    percentIdle: '',
    engineHours: ''

  }

  const paths = [`[ng-bind="$ctrl.dispositions[$ctrl.vehicle.recommendation.faultGuidance.RecommendedAction].title"]`,

    // Last Location
    `//div[@ng-click="$ctrl.showSimpleMapPopup($event)"][1]`,
    `//div[@ng-click="$ctrl.showSimpleMapPopup($event)"][2]`,
    `//div[@class="address-section"]//div[3]`,

    // Vehicle Information
    `[ui-sref="nav.customer.details({key:$ctrl.customer.key})"]`,
    `//div[@class="layout-xs-column layout-row"]/div[1]/div[2]//div`,
    `//div[@class="layout-xs-column layout-row"]/div[1]/div[3]//div`,
    `//div[@class="layout-xs-column layout-row"]/div[1]/div[4]//div`,
    `//div[@class="layout-xs-column layout-row"]/div[1]/div[5]//div`,
    `//div[@class="layout-xs-column layout-row"]/div[1]/div[6]//div`,
    `//div[@class="layout-xs-column layout-row"]/div[1]/div[7]//div`,
    `//div[@class="layout-xs-column layout-row"]/div[2]/div[1]//div`,
    `//div[@class="layout-xs-column layout-row"]/div[2]/div[2]//div`,
    `//div[@class="layout-xs-column layout-row"]/div[2]/div[3]//div`,
    `//div[@class="layout-xs-column layout-row"]/div[2]/div[4]//div`,
    `//div[@class="layout-xs-column layout-row"]/div[2]/div[5]//div`,
    `//div[@class="layout-xs-column layout-row"]/div[2]/div[6]//div`,

    // Vehicle Performance
    `//display-unit[@input="$ctrl.vehicle.vehiclePerformanceData.fuelEconomy"]//span`,
    `//round-unit[@input="$ctrl.vehicle.vehiclePerformanceData.percentIdle"]//span`,
    `//round-unit[@input="$ctrl.vehicle.vehiclePerformanceData.totalEngineHours"]//span`]

  try {
    var pathIndex = 0
    for (var property in vehicleDetails) {
      if (pathIndex < paths.length) {
        // Check if the element is in Vehicle Details
        // Check for the element first by its css then its xpath
        // Otherwise it stays as text ''
        try {
          const element = await parent.findElement(By.css(paths[pathIndex]))
          vehicleDetails[property] = await element.getText()
        } catch (e) {
          try {
            const element = await parent.findElement(By.xpath(paths[pathIndex]))
            vehicleDetails[property] = await element.getText()
          } catch (e) {}
        }

        pathIndex = pathIndex + 1
      }
    }
  } catch (e) {
    /* ignore */
  }

  return Object.freeze(vehicleDetails)
}

module.exports = {
  getVehicleDetails
}
