'use strict'

let { buildElement } = require('../../../../../core/element/buildElement')
    
/**
 * The UI elements present for TID Email Template Page
 * @returns UI Object
 */
let tidEmailTemplatesUI = (() => {

    // TID Email Template Form
    this.dropdownLanguage = buildElement(`dropdownLanguage`, `css`, `[name="lang"][role="listbox"]`)
    this.fieldSubject = buildElement(`fieldSubject`, `css`, `[name="subject"]`)
    this.fieldFrom = buildElement(`fieldFrom`, `css`, `[name="from"]`)
    this.dropdownName = buildElement(`dropdownName`, `css`, `[name="name"][role="listbox"]`)
    this.fieldContent = buildElement(`fieldContent`, `css`, `[name="content"]`)
    this.buttonUpdate = buildElement(`buttonUpdate`, `css`, `[type="submit"]`)

    return this
})
   
module.exports = {
    tidEmailTemplatesUI
}