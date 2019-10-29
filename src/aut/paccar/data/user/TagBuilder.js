'use strict'

let { isEmptyOrWhitespace } = require('../../../../core/model/isEmptyOrWhitespace')

let TagBuilder = (() => {

    let tag = {
        key: '',
        value: ''
    }   

    this.setKey = (value = '') => {
        tag.key = [value]
        return this
    }

    this.setValue = (value = '') => {
        tag.value = [value]
        return this
    }

    this.build = () => {

        if(isEmptyOrWhitespace(tag.key.toString())) throw new Error(`TagBuilder: Invalid Key`)

        return Object.freeze(tag)
    }

    return this
})

module.exports = {
    TagBuilder
}