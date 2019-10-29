'use strict'

let { buildTestValidateSpecificSearch } = require('./buildTestValidateSpecificSearch')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { SearchBuilder } = require('../../data/globalSearch/SearchBuilder')

let testValidateSpecificSearch = async (env = {}, credential = '', data = {}) => {

    // Default global search option index to click is the first non-general search
    var index = data.searchIndex
    if(index == null)
        index = 1

    const search = await SearchBuilder().setText(data.search)
                                        .setSearchIndex(index)
                                        .setExpectedText(data.expectedText)
                                        .setBreadcrumb(data.breadcrumb)
                                        .build()

    const test = await buildTestValidateSpecificSearch(env, credential, search)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testValidateSpecificSearch
}