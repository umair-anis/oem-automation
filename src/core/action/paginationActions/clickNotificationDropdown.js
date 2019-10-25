/**
 * @name clickNotificationDropdown
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { createPagination } = require('./createPagination')
const { clickPaginationButton } = require('./clickPaginationButton')

/**
 * @function clickNotificationDropdown
 * @description Click the Notification Per Page Dropdown on Pagination
 * 
 * @param {MessageBuilder} msg
 */
const clickNotificationDropdown = async (msg = {}) => {

  // Wait for Notifications to load
  const parent = msg.parent
  await parent.sleep(3000)

  const pagination = await createPagination(msg)
  const button = await pagination.notificationsPerPageDropdown

  const resultMsg = await clickPaginationButton(msg, button, 'Notification Per Page Dropdown')

  return Object.freeze(resultMsg)
}

module.exports = {
  clickNotificationDropdown
}
