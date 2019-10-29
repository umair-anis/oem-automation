'use strict'

let getConfirmButtons = async (msg = {}) => {

    return await msg.parent.executeScript(`
    
    const elements = document.querySelectorAll("button");
    
        let primaryButtons = []

        elements.forEach(e => {

            const buttonClass = e.getAttribute('class')
            
            if (buttonClass === 'md-primary md-confirm-button md-button md-ink-ripple md-default-theme') {

                const buttonInfo = {
                    element: e,
                    ngClick: e.getAttribute('ng-click'),
                    type: e.getAttribute('type'),
                    text: e.getAttribute('text')
                }
                
                e.setAttribute('aria-hidden', false)
                
                primaryButtons.push(buttonInfo)
            }
        });
    
        return primaryButtons
    `)
}

module.exports = {
    getConfirmButtons
}