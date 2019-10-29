'use strict'

const { By } = require('selenium-webdriver')
const { HoursOfServiceBuilder } = require('../../data/dealer/HoursOfServiceBuilder')

const scrapeHoursOfService = async (msg = {}) => {
  const parent = msg.parent
  const serviceHours = []
  const mainPath = `//div[@ng-repeat-start="serviceHour in $ctrl.dealer.hours"]`
  const daysOfWeek = await parent.findElements(By.xpath(`${mainPath}//div[@ng-hide="$ctrl.editingServiceHour === serviceHour"]/div[@layout="column"]/div[@layout="row"][1]`))
  const startHours = await parent.findElements(By.xpath(`${mainPath}//*[@ng-bind="$ctrl.moment(serviceHour.open, 'HH:mm:ss').format('h:mm a')"]`))
  const endingHours = await parent.findElements(By.xpath(`${mainPath}//*[@ng-bind="$ctrl.moment(serviceHour.close, 'HH:mm:ss').format('h:mm a')"]`))

  const totalServiceHours = startHours.length
  let currentHours = 0

  for (currentHours; currentHours < totalServiceHours; currentHours++) {
    const days = await daysOfWeek[currentHours].getAttribute('outerText')
    const daysArray = await days.split(`\n`)
    const trimArray = []
    for (const day of daysArray) {
      trimArray.push(await day.trim())
    }
    const hours = await HoursOfServiceBuilder().setOpen(await startHours[currentHours].getText())
      .setClose(await endingHours[currentHours].getText())
      .setDaysOfWeek(trimArray)
      .build()

    await serviceHours.push(hours)
  }

  return Object.freeze(serviceHours)
}

module.exports = {
  scrapeHoursOfService
}
