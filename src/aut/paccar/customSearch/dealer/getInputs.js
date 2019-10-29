'use strict'

let { getElements } = require('./getElements')

let getInputs = async (msg = {}) => {
    return await getElements(msg, 'input')
}

module.exports = {
    getInputs
}