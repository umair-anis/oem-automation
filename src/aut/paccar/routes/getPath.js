'use strict'

// Base Path for REST service calls
let getPath = async (path = ``) => {
    return Object.freeze(`/api/${path}`)
}

module.exports = {
    getPath
}