'use strict'

let { isEmptyOrWhitespace } = require('../../../../core/model/isEmptyOrWhitespace')

let CheckoutBuilder = (() => {

    let checkout = {
        subscription: '',
        bulkSubscriptionDuration: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        extension: ''
    }

    this.setSubscription = (value = '') => {
        checkout.subscription = [value]
        return this
    }

    this.setBulkSubscriptionDuration = (value = '') => {
        checkout.bulkSubscriptionDuration = [value]
        return this
    }

    this.setFirstName = (value = '') => {
        checkout.firstName = [value]
        return this
    }

    this.setLastName = (value = '') => {
        checkout.lastName = [value]
        return this
    }

    this.setEmail = (value = '') => {
        checkout.email = [value]
        return this
    }

    this.setPhone = (value = '') => {
        checkout.phone = [value]
        return this
    }

    this.setExtension = (value = '') => {
        checkout.extension = [value]
        return this
    }

    this.build = () => {

        if(isEmptyOrWhitespace(checkout.subscription.toString())) throw new Error(`CheckoutBuilder: Invalid Subscription`)

        return Object.freeze(checkout)
    }

    return this
})

module.exports = {
    CheckoutBuilder
}