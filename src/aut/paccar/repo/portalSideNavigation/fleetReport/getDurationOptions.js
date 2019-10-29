'use strict'

let getDurationOptions = () => {
    return Object.freeze(["Last 30 days","Last 60 days","Last 90 days","Custom","Cumulative"])
}

module.exports = { 
    getDurationOptions
}