'use strict'

let UserNotificationBuilder = (() => {

    let userNotification = {
        emailNotifications: '',
        subscribedCustomers: [],
        subscribedVehicleGroups: []
    }   

    this.setEmailNotifications = (value = '') => {
        userNotification.emailNotifications = [value]
        return this
    }

    this.setSubscribedCustomers = (value = []) => {
        let formattedCustomerNames = []
        for(let customerName of value){
            formattedCustomerNames.push([customerName])
        }
        userNotification.subscribedCustomers = formattedCustomerNames
        return this
    }

    this.setSubscribedVehicleGroups = (value = []) => {
        let formattedVehicleNames = []
        for(let vehicleName of value){
            formattedVehicleNames.push([vehicleName])
        }
        userNotification.subscribedVehicleGroups = formattedVehicleNames
        return this
    }

    this.build = () => {
        return Object.freeze(userNotification)
    }

    return this
})

module.exports = {
    UserNotificationBuilder
}