'use strict'

let { buildTestSearchWithNoResults } = require('./buildTestSearchWithNoResults')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { SearchBuilder } = require('../../data/globalSearch/SearchBuilder')

let testValidateDOGRegionSearchReturnsNothing = async (env = {}, credential = '') => {

    const text = `CheckoutGroup`

    const search = await SearchBuilder().setText(text)
                                        .build()

    const test = await buildTestSearchWithNoResults(env, credential, search)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testValidateDOGRegionSearchReturnsNothing
}