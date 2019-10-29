'use strict'

let DOGLocationBuilder = (() => {

    let dogLocation = {
        name: ''
    }

    this.setName = (value = '') => {
        dogLocation.name = [value]
        return this
    }

    this.build = () => {
        return Object.freeze(dogLocation)
    }

    return this
})

module.exports = {
    DOGLocationBuilder
}