'use strict'

let getNames = async (entities = []) => {

    let names = []

    for (const entity of entities) {
        await names.push(entity.name)
    }

    return Object.freeze(names)
}

module.exports = {
    getNames
}