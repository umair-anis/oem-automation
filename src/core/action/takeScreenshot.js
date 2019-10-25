/**
 * @name takeScreenshot
 * @author Avery Swank
 */
'use strict'

const sharp = require('sharp')
const fs = require('fs')
const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')
const { compareScreenshots } = require('../screenshot/compareScreenshots')
const { logScreenshot } = require('../logging/logScreenshot')

/**
 * @function takeScreenshot
 * 
 * @description Take a screenshot of the control element. 
 *              Compare it to a baseline image if there is one. 
 *              Send the following Images to the Reporter (if comparing to an image):
 *                - Screenshot: Fullscreen
 *                - Element Screenshot: Control Element (scaled to the width of the current window)
 *                - Baseline Screenshot: Baseline for Comparing Difference to Element Screenshot (scaled to the width of the current window)
 *                - Difference: The Highlighted Differences between Element and Baseline
 * 
 * @param {MessageBuilder} msg 
 * @param {ScreenshotBuilder} msg.data
 */
const takeScreenshot = async (msg = {}) => {
  
  const parent = msg.parent
  const step = msg.content
  const screenshot = step.data[0] // Get Screenshot object
  var result = null
  var details = []

  // The scaled width of both the screenshot and the baseline: ensures both are the same size "windowWidth"
  const windowWidth = await msg.parent.executeScript(`return window.innerWidth`)

  try {

    // Wait for the image to load
    await parent.sleep(4000)

    // Add Fullscreen, Element Screenshot to Reporter
    var screenshotData = await parent.takeScreenshot()
    var elementData = await takeCroppedScreenshot(msg, screenshot, screenshotData)
    elementData = await sharp(Buffer.from(elementData, screenshot.encodingType))
      .resize({ width: windowWidth }).trim(10)
      .toBuffer()
    await logScreenshot(`Screenshot`, screenshotData, `Screenshot/${screenshot.fileType}`)
    await logScreenshot(`Element Screenshot`, elementData, `Element_Screenshot/${screenshot.fileType}`)
    details.push(`Logged Fullscreen Screenshot`)
    details.push(`Logged Element Screenshot`)

    // If comparing against a base image, run a compareScreenshots check
    if(screenshot.baselinePath.toString() != ''){

      // Add Baseline Screenshot to reporter
      var baselineData = await fs.readFileSync(screenshot.baselinePath.toString())
      baselineData = await sharp(Buffer.from(baselineData, screenshot.encodingType))
      .resize({ width: windowWidth })
      .toBuffer()
      await logScreenshot(`Baseline`, baselineData, `Baseline/${screenshot.fileType}`)
      details.push(`Logged Baseline Screenshot`)

      const elemImg = Buffer.from(elementData, screenshot.encodingType)
      const baseImg = Buffer.from(baselineData, screenshot.encodingType)
      const similarity = await compareScreenshots(elemImg, baseImg)

      details.push(`Screenshot Comparison Similarity: ${similarity} Image Threshold: ${screenshot.similarity}`)
      if(similarity < screenshot.similarity) throw new Error(`Screenshot is not similar to Base Screenshot`)
    }

    details.push(`Action Successful: Take Screenshot (and Compare to Baseline Screenshot)`)

    result = await ResultBuilder().setChild(msg.child)
      .setStatus('pass')
      .setDetails(details)
      .build()
  } catch (e) {

    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Action FAILED: Take Screenshot ${e}`])
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

/**
 * @function takeCroppedScreenshot
 * 
 * @description Take a Screenshot of a Particular Element that is Visible to the Driver.
 * 
 * @param {MessageBuilder} msg 
 * @param {ScreenshotBuilder} screenshot 
 * @param {Buffer} screenshotData 
 */
const takeCroppedScreenshot = async (msg, screenshot, screenshotData) => {

  // Get Element Width, Height with rect
  const element = msg.child
  const rect = await msg.parent.executeScript(`return arguments[0].getBoundingClientRect()`, element)

  // Convert screenshot width to window width so sharp.extract() grabs the correct element at the proper pixel offsets
  const windowWidth = await msg.parent.executeScript(`return window.innerWidth`)
  const windowAccurateData = await sharp(Buffer.from(screenshotData, screenshot.encodingType))
  .resize({ width: windowWidth })
  .toBuffer()

  return await sharp(Buffer.from(windowAccurateData, screenshot.encodingType))
  .extract({
    left: Math.floor(rect.left),
    top: Math.floor(rect.top),
    width: Math.floor(rect.width),
    height: Math.floor(rect.height)
  })
  .toBuffer()
}

module.exports = {
    takeScreenshot
}
