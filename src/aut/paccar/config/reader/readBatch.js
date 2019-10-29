'use strict'

let readBatch = () => {
    const batch = require('../batch.json')
    return Object.freeze(batch)
}

module.exports = {
    readBatch
}