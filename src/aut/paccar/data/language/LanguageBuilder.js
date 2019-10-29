'use strict'

let LanguageBuilder = (() => {

    let translator = {
        english: '',
        spanish: ''
    }

    this.setEnglish = (value = '') => {
        translator.english = [value]
        return this
    }

    this.setSpanish = (value = '') => {
        translator.spanish = [value]
        return this
    }

    this.build = () => {
        return Object.freeze(translator)
    }

    return this
})

module.exports = {
    LanguageBuilder
}