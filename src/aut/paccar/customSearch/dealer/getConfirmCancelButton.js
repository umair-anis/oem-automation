'use strict'

let getConfirmCancelButton = async (msg = {}) => {
    `var elements = document.querySelectorAll("*")
    
    var info = []

    elements.forEach(e => {

        const ngClick = e.getAttribute('ng-click')

        if (myClass === 'md-icon-button md-button md-default-theme md-ink-ripple') {

            const buttonInfo = {
                ngClick: e.getAttribute('ng-click'),
                element: e
            }
            
            info.push(buttonInfo)
        }
    })
    
    return info`
}

module.exports = {
    getConfirmCancelButton
}