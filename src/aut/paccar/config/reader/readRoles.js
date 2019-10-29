'use strict'

let readRoles = () => {
    const roles = require('../roles.json')
    return Object.freeze(roles)
}

module.exports = {
    readRoles
}