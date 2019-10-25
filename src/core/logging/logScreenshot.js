'use strict'

const logScreenshot = async (name = '', screenshotData, formattedName = '') => {
  await reporter.addAttachment(`${name}`, Buffer.from(screenshotData, 'base64'), formattedName)
}

module.exports = {
    logScreenshot
}
