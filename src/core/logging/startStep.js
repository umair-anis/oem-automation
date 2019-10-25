'use strict'

const startStep = async (description = '') => {
  try {
    await reporter.startStep(description)
  } catch (e) {}
}

module.exports = {
  startStep
}
