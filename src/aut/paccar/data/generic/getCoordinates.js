'use strict'

let getCoordinates = async (entities = []) => {

    let coords = []

    for (const entity of entities) {
        for (const coordinate of entity.coordinates) {
            await coords.push(coordinate)
        }
    }

    return Object.freeze(coords)
}

module.exports = {
    getCoordinates
}