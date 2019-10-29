'use strict'

let getCodes = async (entities = []) => {

    let codes = []

    for (const entity of entities) {
        await codes.push(entity.code)
    }

    return Object.freeze(codes)
}

module.exports = {
    getCodes
}