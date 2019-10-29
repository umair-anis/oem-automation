'use strict'

const { buildTestTIDEmailTemplate } = require('./buildTestTIDEmailTemplate')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { TIDEmailTemplateBuilder } = require('../../data/tidEmailTemplate/TIDEmailTemplateBuilder')
const { createAddress } = require('../../../../core/action/createAddress')

const testTIDEmailTemplate = async (env = {}, credential = '', data = {}) => {
  const template = await TIDEmailTemplateBuilder().setLanguage(data.language)
    .setSubject(data.subject)
    .setFrom(await createAddress())
    .setName(data.templateName)
    .setContent(data.content)
    .build()

  const test = await buildTestTIDEmailTemplate(env, credential, template)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testTIDEmailTemplate
}
