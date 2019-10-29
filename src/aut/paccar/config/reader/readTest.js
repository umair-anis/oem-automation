'use strict'

let readTest = () => {
    const test = require('../test.json')
    return Object.freeze(test)
}

module.exports = {
    readTest
}