'use strict'

const { buildTestViewExecutionDetails } = require('./buildTestViewExecutionDetails')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { DataImportBuilder } = require('../../data/dataImport/DataImportBuilder')

const testViewExecutionDetails = async (env = {}, credential = '', data = {}) => {

  const dataImport = await DataImportBuilder().setJobName(data.jobName)
  .setExectionID(data.executionID)
  .setInfo(data.info)
  .build()

  const test = await buildTestViewExecutionDetails(env, credential, dataImport)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testViewExecutionDetails
}
