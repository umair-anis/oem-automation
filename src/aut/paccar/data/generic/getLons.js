'use strict'

let getLons = async (entities = []) => {

    let lons = []

    for (const entity of entities) {
        await lons.push(entity.lon)
    }

    return Object.freeze(lons)
}

module.exports = {
    getLons
}