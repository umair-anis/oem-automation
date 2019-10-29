'use strict'

let readOrganizations = () => {
    const organizations = require('../organizations.json')
    return Object.freeze(organizations)
}

module.exports = {
    readOrganizations
}