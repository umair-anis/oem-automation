'use strict'

const { buildElement } = require('../element/buildElement')

// Build an element that stores, when called, a list of elements rather than a single element
// buildElement  is like element(by())
// buildElements is like element.all(by())
const buildElements = async (name = '', propertyName = '', propertyValue = '') => {
  const propertyListName = `list_${propertyName}`
  const elements = await buildElement(name, propertyListName, propertyValue)
  return Object.freeze(elements)
}

module.exports = {
  buildElements
}
