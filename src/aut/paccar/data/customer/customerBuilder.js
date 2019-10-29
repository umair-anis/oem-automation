'use strict'

let CustomerBuilder = (() => {

    let customer = {
        name: '',
        email: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        phone: '',
        fax: '',
        joinDealerNetwork: false,
    }

    this.setName = (value = '') => {
        customer.name = [value]
        return this
    }

    this.setEmail = (value = '') => {
        customer.email = [value]
        return this
    }

    this.setAddress1 = (value = '') => {
        customer.address1 = [value]
        return this
    }

    this.setAddress2 = (value = '') => {
        customer.address2 = [value]
        return this
    }

    this.setCity = (value = '') => {
        customer.city = [value]
        return this
    }

    this.setState = (value = '') => {
        customer.state = [value]
        return this
    }

    this.setZipCode = (value = '') => {
        customer.zipCode = [value]
        return this
    }

    this.setCountry = (value = '') => {
        customer.country = [value]
        return this
    }

    this.setPhone = (value = '') => {
        customer.phone = [value]
        return this
    }

    this.setFax = (value = '') => {
        customer.fax = [value]
        return this
    }

    this.setJoinDealerNetwork = (value = false) => {
        customer.joinDealerNetwork = value
        return this
    }

    this.build = () => {
        return Object.freeze(customer)
    }

    return this
})

module.exports = {
    CustomerBuilder
}