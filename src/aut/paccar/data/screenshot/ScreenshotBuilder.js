'use strict'

const fs = require('fs')

let ScreenshotBuilder = (() => {

    let screenshot = {
        name: '',
        fileName: '',
        fileType: '',
        encodingType: '',
        size: {
            width: 0,
            height: 0
        },

        comparingToBaseline: false,
        baselinePath: '',
        similarity: 100
    }

    this.setName = (value = '') => {
        screenshot.name = value
        return this
    }

    this.setFileName = (value = '') => {
        screenshot.fileName = value
        return this
    }

    this.setFileType = (value = '') => {
        screenshot.fileType = value
        return this
    }

    this.setEncodingType = (value = '') => {
        screenshot.encodingType = value
        return this
    }

    this.setSize = (value = 0) => {
        screenshot.width = value
        return this
    }

    this.setComparingToBaseline = (value = false) => {
        screenshot.comparingToBaseline = value
        return this
    }

    this.setBaselinePath = (value = '') => {
        screenshot.baselinePath = value
        return this
    }

    this.setSimilarity = (value = '') => {
        screenshot.similarity = value
        return this
    }

    this.build = () => {

        if(screenshot.fileType !== 'png') throw new Error(`ScreenshotBuilder: File Type does not match Selenium's Screenshot output`)
        if(screenshot.encodingType !== 'base64' && screenshot.encodingType !== 'html' && screenshot.encodingType !== 'url') throw new Error(`ScreenshotBuilder: Invalid Encoding Type`)
        if(screen.similarity < 0 || 100 < screen.similarity) throw new Error(`ScreenshotBuilder: Invalid Similarity threshold`)

        return Object.freeze(screenshot)
    }

    return this
})

module.exports = {
    ScreenshotBuilder
}