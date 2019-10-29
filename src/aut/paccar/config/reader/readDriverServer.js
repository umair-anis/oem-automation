'use strict'

let readDriverServer = () => {
    const driverServer = require('../driverServer.json')
    return Object.freeze(driverServer)
}

module.exports = {
    readDriverServer
}