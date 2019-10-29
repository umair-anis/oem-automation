'use strict'

let getHoursOfService = async (entities = []) => {

    let hos = []

    for (const entity of entities) {
        for (const hours of entity.hoursOfService) {
            await hos.push(hours)
        }
    }

    return Object.freeze(hos)
}

module.exports = {
    getHoursOfService
}