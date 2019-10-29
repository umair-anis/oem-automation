'use strict'

let { getElements } = require('./getElements')

let getMdRadioButtons = async (msg = {}) => {
    return await getElements(msg, 'md-radio-button')
}

module.exports = {
    getMdRadioButtons
}