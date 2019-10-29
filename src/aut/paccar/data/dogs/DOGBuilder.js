'use strict'

let { isEmptyOrWhitespace } = require('../../../../core/model/isEmptyOrWhitespace')

let DOGBuilder = (() => {

    let dealerOwnerGroup = {
        name: '',
        description: '',
    }

    this.setName = (value = '') => {
        dealerOwnerGroup.name = [value]
        return this
    }

    this.setDescription = (value = '') => {
        dealerOwnerGroup.description = [value]
        return this
    }

    this.build = () => {

        if(isEmptyOrWhitespace(dealerOwnerGroup.name.toString())) throw new Error(`DOGBuilder: Invalid Name`)

        return Object.freeze(dealerOwnerGroup)
    }

    return this
})

module.exports = {
    DOGBuilder
}