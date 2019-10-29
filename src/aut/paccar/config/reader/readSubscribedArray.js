'use strict'

let readSubscribedArray = () => {
    const subscribedArray = require('../subscribedArray.json')
    return Object.freeze(subscribedArray)
}

module.exports = {
    readSubscribedArray
}