'use strict'

let getIconButtons = async (msg = {}) => {

    return await msg.parent.executeScript(`var elements = document.querySelectorAll("button")
    
    var info = []

    elements.forEach(e => {

        const myClass = e.getAttribute('class')

        if (myClass === 'md-icon-button md-button md-default-theme md-ink-ripple') {

            const buttonInfo = {
                ngClick: e.getAttribute('ng-click'),
                element: e
            }
            
            info.push(buttonInfo)
        }
    })
    
    return info`)
}

module.exports = {
    getIconButtons
}