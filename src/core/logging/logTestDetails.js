'use strict'

const logTestDetails = async (name = ``, testDetails = []) => {
  // Add Title
  const title = `Details of Failure: ${name}`
  var logDetails = [`${title} \n`, `\n`]

  // Add Every Detail
  for (var i = 0; i < testDetails.length; i++) {
    logDetails.push(`${i + 1}. ${testDetails[i]} \n`)
  }
  // await reporter.addAttachment(title, logDetails.join(``))
}

module.exports = {
  logTestDetails
}
