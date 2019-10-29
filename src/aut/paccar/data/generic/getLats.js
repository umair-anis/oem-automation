'use strict'

let getLats = async (entities = []) => {

    let lats = []

    for (const entity of entities) {
        await lats.push(entity.lat)
    }

    return Object.freeze(lats)
}

module.exports = {
    getLats
}