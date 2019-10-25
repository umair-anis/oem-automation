'use strict'

const endStep = async (status = '') => {
  try {
    await reporter.endStep(status)
  } catch (e) {}
}

module.exports = {
  endStep
}
