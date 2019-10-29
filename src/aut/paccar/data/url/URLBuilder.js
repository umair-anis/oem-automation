'use strict'

let URLBuilder = (() => {

    let url = {
        text: '',
        tabIndex: -1
    }

    this.setText = (value = '') => {
        url.text = [value]
        return this
    }

    this.setTabIndex = (value = -1) => {
        url.tabIndex = value
        return this
    }

    this.build = () => {
        return Object.freeze(url)
    }

    return this
})

module.exports = {
    URLBuilder
}