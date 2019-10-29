'use strict'

let CredentialBuilder = (() => {

    let user = {
        type: '',
        username: '',
        password: '',
        email: '',
        name: '',
        uid: ''
    }

    this.setType = (value = '') => {
        user.type = value
        return this
    }

    this.setUsername = (value = '') => {
        user.username = value
        return this
    }

    this.setPassword = (value = '') => {
        user.password = value
        return this
    }

    this.setEmail = (value = '') => {
        user.email = value
        return this
    }

    this.setName = (value = '') => {
        user.name = value
        return this
    }

    this.setUid = (value = '') => {
        user.uid = value
        return this
    }

    this.build = () => {
        return Object.freeze(user)
    }

    return this
})

module.exports = {
    CredentialBuilder
}