'use strict'

let { buildTestSearchWithNoResults } = require('./buildTestSearchWithNoResults')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { SearchBuilder } = require('../../data/globalSearch/SearchBuilder')

let testValidateDOGSearchReturnsNothing = async (env = {}, credential = '') => {

    const text = `DealerOwnerTestGroup`

    const search = await SearchBuilder().setText(text)
                                        .build()

    const test = await buildTestSearchWithNoResults(env, credential, search)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testValidateDOGSearchReturnsNothing
}