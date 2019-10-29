'use strict'

let { buildData } = require('../strategy/buildData')

let readUrls = async (env = '') => {
    return Object.freeze(await buildData(env, readDev, readQa, readStaging, readProd))
}

let readDev = () => {
    return require('../devUrls.json')
}

let readQa = () => {
    return require('../qaUrls.json')
}

let readStaging = () => {
    return require('../stagingUrls.json')
}

let readProd = () => {
    return require('../prodUrls.json')
}

module.exports = {
    readUrls
}