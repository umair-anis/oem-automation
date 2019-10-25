'use strict'

const { isEmptyOrWhitespace } = require('../model/isEmptyOrWhitespace')

const HeaderBuilder = (() => {
  const header = {
    name: '',
    value: ''
  }

  this.setName = (value = '') => {
    header.name = value
    return this
  }

  this.setValue = (value = '') => {
    header.value = value
    return this
  }

  this.build = async () => {
    const isNameEmpty = await isEmptyOrWhitespace(header.name)
    const isValueEmpty = await isEmptyOrWhitespace(header.value)

    if (isNameEmpty) throw new Error(`Name cannot be empty for a header property.`)
    if (isValueEmpty) throw new Error(`Value cannot be empty for a header property.`)

    return Object.freeze(header)
  }

  return this
})

module.exports = {
  HeaderBuilder
}
