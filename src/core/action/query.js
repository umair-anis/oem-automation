/**
 * @name query
 */
'use strict'

const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function query
 * @description Query a set of data
 * 
 * @param {MessageBuilder} msg
 */
const query = (msg = {}) => {

  // execute the query.
  // store the results in result data as a key/value pair.
  // modify the data iterations based upon query results.
}

module.exports = {
  query
}
