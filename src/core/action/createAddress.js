/**
 * @module createAddress
 * @author Chad Simonson
 * @description Contains the function: 'createAddress()'.
 * @implements {createAddress}
 */

'use strict'

/**
 * @function createAddress
 * @author Chad Simonson
 * 
 * @implements {MailosaurClient} Mailosaur client function.
 * @description Uses Mailosaur API to generate random email addresses for a given email server. This allows test data
 * to have a valid test email address so we don't get flagged by Amazon.
 * 
 * @example
 * const myNewEmailAddress = createAddress()
 *
 * @returns {string} A newly Generated Email
 */
const createAddress = () => {
  const MailosaurClient = require('mailosaur')
  const emailClient = new MailosaurClient('uNQ0LIR3YCETab2')
  const serverId = '7tjr5nm9'

  return emailClient.servers.generateEmailAddress(serverId)
}
module.exports = {
  createAddress
}
