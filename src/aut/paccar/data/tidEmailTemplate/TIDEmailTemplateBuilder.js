'use strict'

let TIDEmailTemplateBuilder = (() => {

    let template = {
        language: '',
        subject: '',
        from: '',
        name: '',
        content: ''
    }

    this.setLanguage = (value = '') => {
        template.language = [value]
        return this
    }

    this.setSubject = (value = '') => {
        template.subject = [value]
        return this
    }

    this.setFrom = (value = '') => {
        template.from = [value]
        return this
    }

    this.setName = (value = '') => {
        template.name = [value]
        return this
    }

    this.setContent = (value = '') => {
        template.content = [value]
        return this
    }

    this.build = () => {
        return Object.freeze(template)
    }

    return this
})

module.exports = {
    TIDEmailTemplateBuilder
}