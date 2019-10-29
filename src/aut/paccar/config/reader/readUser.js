'use strict'

let readUser = () => {
    const user = require('../user.json')
    return Object.freeze(user)
}

module.exports = {
    readUser
}