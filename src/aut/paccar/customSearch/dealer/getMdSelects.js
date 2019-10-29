'use strict'

let { getElements } = require('./getElements')

let getMdSelects = async (msg = {}) => {
    return await getElements(msg, 'md-select')
}

module.exports = {
    getMdSelects
}