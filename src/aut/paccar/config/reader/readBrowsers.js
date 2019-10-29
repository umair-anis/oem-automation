'use strict'

let { BrowserBuilder } = require('../../../../core/browser/BrowserBuilder')
let { isValidBrowserName } = require('../../../../core/browser/isValidBrowserName')

let readBrowsers = async () => {

    let browsers = []
    const contents = require('../browsers.json')

    for (let browser of contents.browsers) {

        const isValidName = await isValidBrowserName(browser.name)

        if (!isValidName) throw new Error(`Invalid browser name specified in browsers.json: ${browsers.name}.`)

        browsers.push(await BrowserBuilder().setName(browser.name)
                                      .setVersion(browser.version)
                                      .build())
    }

    return Object.freeze(browsers)
}

module.exports = {
    readBrowsers
}