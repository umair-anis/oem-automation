'use strict'

let NotificationBuilder = (() => {

    let notification = {
        title: '',
        recipient: '',
        dateTime: '',
        status: '',

        json: ''
    }

    this.setTitle = (value = '') => {
        notification.title = [value]
        return this
    }

    this.setRecipient = (value = '') => {
        notification.recipient = [value]
        return this
    }

    this.setDateTime = (value = '') => {
        notification.dateTime = [value]
        return this
    }

    this.setStatus = (value = '') => {
        notification.status = [value]
        return this
    }

    this.setJSON = (value = '') => {
        notification.json = [value]
        return this
    }

    this.build = () => {
        return Object.freeze(notification)
    }

    return this
})

module.exports = {
    NotificationBuilder
}