'use strict'

let { readValidCredentials } = require('./reader/readValidCredentials')

let buildCredentialToAdd = async (env = '', type = '') => {

    let filteredType = []
    const users = await readValidCredentials(env)

    if (type === '') {

        //Defaults to 'paccaradmin' if not type is specified.
        for (const user of users) {
            if (user.type === 'paccaradmin') filteredType.push(user)
        }
        
    } else {

        for (const user of users) {
            if (user.type.toLowerCase() === type.toLowerCase()) filteredType.push(user)
        }
    }

    return Object.freeze(filteredType)
}

module.exports = {
    buildCredentialToAdd
}