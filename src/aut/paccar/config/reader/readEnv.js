'use strict'

let { EnvironmentBuilder } = require('../../../../core/environment/EnvironmentBuilder')
let { isValidEnv } = require('../validator/isValidEnv')

let readEnv = async () => {

    const envData = require('../env.json')

    const env = await EnvironmentBuilder().setIsRemote(envData.isRemote)
                                    .setIsSauceLabs(envData.isSauceLabs)
                                    .setName(envData.name)
                                    .setRemoteUrl(envData.remoteUrl)
                                    .build(isValidEnv)

    return Object.freeze(env)
}

module.exports = {
    readEnv
}