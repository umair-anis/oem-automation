'use strict'

let { isEmptyOrWhitespace } = require('../../../../core/model/isEmptyOrWhitespace')

let SearchBuilder = (() => {

    let search = {
        text: '',
        searchIndex: 1,
        expectedText: '',
        searchResults: '',
        breadcrumb: ''
    }

    this.setText = (value = '') => {
        search.text = [value]
        return this
    }

    this.setSearchIndex = (value = 1) => {
        search.searchIndex = value
        return this
    }

    this.setExpectedText = (value = '') => {
        search.expectedText = [value]
        return this
    }

    this.setSearchResults = (value = []) => {
        search.searchResults = value
        return this
    }

    // Bbreadcrumb that comes after clicking the more specific search
    this.setBreadcrumb = (value = []) => {
        search.breadcrumb = value
        return this
    }

    this.build = () => {

        if(isEmptyOrWhitespace(search.text.toString())) throw new Error(`SearchBuilder: Invalid Search Text`)

        return Object.freeze(search)
    }

    return this
})

module.exports = {
    SearchBuilder
}