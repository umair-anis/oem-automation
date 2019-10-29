'use strict'

let { buildData } = require('../../../config/strategy/buildData')
let { isEmptyOrWhitespace } = require('../../../../../core/model/isEmptyOrWhitespace')
let { log } = require('../../../../../core/logging/log')
let { CredentialBuilder } = require('../CredentialBuilder')

let readValidCredentials = async (env = '') => {

    let users = []
    const creds = await buildData(env, readDevCreds, readQaCreds, readStagingCreds, readProdCreds)
    const credentials = creds.credentials

    for (let cred of credentials) {

        const isUserNameEmpty = await isEmptyOrWhitespace(cred.username)
        const isPasswordEmpty = await isEmptyOrWhitespace(cred.password)

        if (isUserNameEmpty) {
            const userNameMsg = `Cannot use an empty username for a valid login.`
            log(userNameMsg)
            throw new Error(userNameMsg)
        }

        if (isPasswordEmpty) {
            const passwordMsg = `Cannot use an empty password for a valid login.`
            log(passwordMsg)
            throw new Error(passwordMsg)
        }

        users.push(await CredentialBuilder().setType(cred.type)
                                            .setUsername(cred.username)
                                            .setPassword(cred.password)
                                            .setEmail(cred.email)
                                            .setName(cred.name)
                                            .setUid(cred.uid)
                                            .build())
    }

    return Object.freeze(users)
}

let readDevCreds = () => {
    return require('../validDevCredentials.json')
}

let readQaCreds = () => {
    return require('../validQaCredentials.json')
}

let readStagingCreds = () => {
    return require('../validStagingCredentials.json')
}

let readProdCreds = () => {
    return require('../validProdCredentials.json')
}

module.exports = {
    readValidCredentials
}