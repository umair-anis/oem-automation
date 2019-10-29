'use strict'

let RequestBuilder = (() => {

    let request = {
        url: '',
        contentType: '',
        data: {}
    }

    this.setURL = (value = '') => {
        request.url = value
        return this
    }

    this.setContentType = (value = '') => {
        request.contentType = value
        return this
    }

    this.setData = (value = {}) => {
        request.data = value
        return this
    }

    this.build = () => {
        return Object.freeze(request)
    }

    return this
})

module.exports = {
    RequestBuilder
}