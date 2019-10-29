'use strict'

let readOTAFiles = () => {
    const otaFiles = require('../otaFiles.json')
    return Object.freeze(otaFiles)
}

module.exports = {
    readOTAFiles
}