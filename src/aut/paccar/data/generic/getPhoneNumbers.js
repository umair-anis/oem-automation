'use strict'

let getPhoneNumbers = async (entities = []) => {

    let numbers = []

    for (const entity of entities) {
        for (const phoneNumber of entity.phoneNumbers) {
            await numbers.push(phoneNumber)
        }
    }

    return Object.freeze(numbers)
}

module.exports = {
    getPhoneNumbers
}