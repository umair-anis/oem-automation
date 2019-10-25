'use strict'

const { logScreenshot } = require('../logging/logScreenshot')
const resemble = require('resemblejs/resemble')
const compareImages = require('resemblejs/compareImages')

/**
 * @description Compare two screenshots using ResembleJS
 *              Acquire the diffImage properties and log the difference's screenshot
 *              Return the image's match percentage
 */
let compareScreenshots = async (img1, img2) => {

    var similarity = -1
    var diff = null

    try{

      // Image Difference Settings
      const options = {
        output: {
            errorColor: {
                red: 255,
                green: 0,
                blue: 255
            },
            errorType: "movement",
            transparency: 1,
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true
        },
        scaleToSameSize: false,
        ignore: "antialiasing"
      };

      diff = await compareImages(img1, img2, options)
      similarity = (1 - diff.rawMisMatchPercentage) * 100

      await logScreenshot(`Difference to Baseline: ${similarity}% Match`, diff.getBuffer(), `highlights/png`)

    } catch (e) {
      console.log(`Error Comparing images: ${e}`)
    }

    return Object.freeze(similarity)
}

module.exports = {
    compareScreenshots
}
