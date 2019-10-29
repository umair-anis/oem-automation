'use strict'

let { buildTestSideLink } = require('./buildTestSideLink')
let { invokeTest } = require('../../../../core/test/invokeTest')

let testSideLink = async (env = {}, account, clickSideLink = {}) => {

    const test = await buildTestSideLink(env, account, clickSideLink)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testSideLink
}