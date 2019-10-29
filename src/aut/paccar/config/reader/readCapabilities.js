'use strict'

let readCapabilities = () => {
    const capabilities = require('../capabilities.json')
    return Object.freeze(capabilities)
}

module.exports = {
    readCapabilities
}