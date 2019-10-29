'use strict'

let getLocations = async (entities = []) => {

    let locations = []

    for (const entity of entities) {
        for (const location of entity.locations) {
            await locations.push(location)
        }
    }

    return Object.freeze(locations)
}

module.exports = {
    getLocations
}