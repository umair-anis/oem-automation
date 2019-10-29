'use strict'

let { readBrowser } = require('../reader/readBrowsers')
let { readCapabilities } = require('../reader/readCapabilities')

let buildDriver = async () => {

    const capabilities = await readCapabilities()

}

module.exports = {
    buildDriver
}