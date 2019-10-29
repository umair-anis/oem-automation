'use strict'

let readMailosaur = () => {
    const mailosaur = require('../mailosaur.json')
    return Object.freeze(mailosaur)
}

module.exports = {
    readMailosaur
}