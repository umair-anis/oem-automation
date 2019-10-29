'use strict'

/**
 * Get the current Data Export format
 * Format: name_MM-DD-YYYY
 */
let getDataExportFileFormat = async (name = []) => {

    var date = new Date()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var year = date.getFullYear()

    // Convert single digits to file format
    if(month.toString().length == 1)
        month = "0" + month

    if(day.toString().length == 1)
        day = "0" + day

    const format = [`${name}_${month}-${day}-${year}`]
    return Object.freeze(format)
}

module.exports = {
    getDataExportFileFormat
}