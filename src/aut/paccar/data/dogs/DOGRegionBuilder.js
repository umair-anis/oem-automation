'use strict'

let DOGRegionBuilder = (() => {

    let dogRegion = {
        name: '',
        location: ''
    }

    this.setName = (value = '') => {
        dogRegion.name = [value]
        return this
    }

    this.setLocation = (value = '') => {
        dogRegion.location = [value]
        return this
    }

    this.build = () => {
        return Object.freeze(dogRegion)
    }

    return this
})

module.exports = {
    DOGRegionBuilder
}