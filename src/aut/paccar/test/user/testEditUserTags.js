'use strict'

const { buildTestEditUserTags } = require('./buildTestEditUserTags')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { TagBuilder } = require('../../data/user/TagBuilder')
const { UserBuilder } = require('../../data/user/UserBuilder')

const testEditUserTags = async (env = {}, credential = '', data = {}) => {

  const user = await UserBuilder().setEmail(data.email)
    .build()
  const newTag = await TagBuilder().setKey(data.newKey)
    .setValue(data.newValue)
    .build()
  const editedTag = await TagBuilder().setKey(data.editedKey)
    .setValue(data.editedValue)
    .build()

  const test = await buildTestEditUserTags(env, credential, user, newTag, editedTag)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testEditUserTags
}
