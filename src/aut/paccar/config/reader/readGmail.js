'use strict'

let readGmail = () => {
    const gmail = require('../gmail.json')
    return Object.freeze(gmail)
}

module.exports = {
    readGmail
}