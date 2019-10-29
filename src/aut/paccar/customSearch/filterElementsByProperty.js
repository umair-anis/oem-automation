'use strict'

const filterElementsByProperty = async (info = [], propertyName = '', propertyValue = '') => {

    const elements = []
    const re = new RegExp(`${propertyValue}`)

    for (const i of info) {

        if (i[propertyName].match(re)) {
            await elements.push(i.element)
        }
    }

    return Object.freeze(elements)
}

module.exports = {
    filterElementsByProperty
}