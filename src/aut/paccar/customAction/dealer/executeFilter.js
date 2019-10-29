'use strict'

let { enterInput } = require('./enterInput')

let executeFilter = async (msg = {}) => {
    return await enterInput(msg)
}

module.exports = {
    executeFilter
}