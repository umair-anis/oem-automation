'use strict'

let { buildTestExportRemoteDiagnostics } = require('./buildTestExportRemoteDiagnostics')
let { invokeTest } = require('../../../../core/test/invokeTest')

let testExportRemoteDiagnostics = async (env = {}, credential = '') => {

    const test = await buildTestExportRemoteDiagnostics(env, credential)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testExportRemoteDiagnostics
}