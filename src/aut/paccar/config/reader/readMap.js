'use strict'

let readMap = () => {
    const map = require('../map.json')
    return Object.freeze(map)
}

module.exports = {
    readMap
}