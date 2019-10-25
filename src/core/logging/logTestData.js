'use strict'

const logTestData = async (data = {}) => {

  try{
    // Add Title
    const title = `Test Data: ${data.name}`
    var logDetails = [`${title} \n`, `\n`]

    // Add Data
    logDetails.push(`${JSON.stringify(data).toString()} \n`)

    await reporter.addAttachment(title, logDetails.join(``))
  } catch (e) { /* ignore */ }
}

module.exports = {
    logTestData
}
