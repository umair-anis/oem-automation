'use strict'

let { isEmptyOrWhitespace } = require('../../../../core/model/isEmptyOrWhitespace')

let UserBuilder = (() => {

    let user = {
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        extension: '',
        organizationType: '',
        organizationName: '',
        userRole: '',
        
        editPreferences: true,
        preferences: {
            hideJoinAll: false,
            collapseNavBar: false,
            mapCenter: '',
            language: '',
            measure: '',
            distance: '',
            volume: '',
            fuelEconomy: '',
            temperature: '',
            pressure: '',
            mass: ''
        },

        newPassword: '',
        confirmPassword: '',
        active: true,
        emailNotVerified: false
    }   

    this.setEmail = (value = '') => {
        user.email = [value]
        return this
    }

    this.setFirstName = (value = '') => {
        user.firstName = [value]
        return this
    }

    this.setLastName = (value = '') => {
        user.lastName = [value]
        return this
    }

    this.setPhone = (value = '') => {
        user.phone = [value]
        return this
    }

    this.setExtension = (value = '') => {
        user.extension = [value]
        return this
    }

    this.setOrganizationType = (value = '') => {
        user.organizationType = [value]
        return this
    }

    this.setOrganizationName = (value = '') => {
        user.organizationName = [value]
        return this
    }

    this.setUserRole = (value = '') => {
        user.userRole = [value]
        return this
    }

    this.setEditPreferences = (value = true) => {
        user.editPreferences = value
        return this
    }

    this.setHideJoinAll = (value = false) => {
        user.hideJoinAll = value
        return this
    }

    this.setCollapseNavBar = (value = true) => {
        user.collapseNavBar = value
        return this
    }

    this.setMapCenter = (value = '') => {
        user.preferences.mapCenter = [value]
        return this
    }

    this.setLanguage = (value = '') => {
        user.preferences.language = [value]
        return this
    }

    this.setMeasure = (value = '') => {
        user.preferences.measure = [value]
        return this
    }

    this.setDistance = (value = '') => {
        user.preferences.distance = [value]
        return this
    }

    this.setVolumne = (value = '') => {
        user.preferences.volume = [value]
        return this
    }

    this.setFuelEconomy = (value = '') => {
        user.preferences.fuelEconomy = [value]
        return this
    }

    this.setTemperature = (value = '') => {
        user.preferences.temperature = [value]
        return this
    }

    this.setPressure = (value = '') => {
        user.preferences.pressure = [value]
        return this
    }

    this.setMass = (value = '') => {
        user.preferences.mass = [value]
        return this
    }

    this.setPassword = (value = '') => {
        user.newPassword = [value]
        return this
    }

    this.setConfirmPassword = (value = '') => {
        user.confirmPassword = [value]
        return this
    }

    this.setActive = (value = true) => {
        user.active = value
        return this
    }

    this.setEmailNotVerified = (value = false) => {
        user.emailNotVerified = value
        return this
    }

    this.build = () => {
        return Object.freeze(user)
    }

    return this
})

module.exports = {
    UserBuilder
}