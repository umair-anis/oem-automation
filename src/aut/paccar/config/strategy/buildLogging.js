'use strict'

let { readLogging } = require('../reader/readLogging')

let buildLogging = async () => {

    let log = {}
    const config = await readLogging()

    return Object.freeze(log)
}

module.exports = {
    buildLogging
}