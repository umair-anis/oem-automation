 'use strict'

 let getEmails = async (entities = []) => {

    let emails = []

    for (const entity of entities) {
        await emails.push(entity.email)
    }

    return Object.freeze(emails)
 }

 module.exports = {
     getEmails
 }