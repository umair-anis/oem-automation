'use strict'

let { buildElement } = require('../../../../core/element/buildElement')

let headerUI = (async () => {

    this.editSearch = await buildElement(`editSearch`, `xpath`, `//*[@placeholder='Search']`)

    return this
})

module.exports = {
    headerUI
}