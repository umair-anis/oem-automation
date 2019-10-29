'use strict'

let getCancelButtons = async (msg = {}) => {

    return await msg.parent.executeScript(`var elements = document.querySelectorAll("button");
    
    var info = [];

    elements.forEach(e => {

        const myClass = e.getAttribute('class');

        if (myClass === 'md-button md-default-theme md-ink-ripple') {

            e.setAttribute('aria-hidden', false);
            
            const i = {
                text: e.getAttribute('innertext'),
                ngClick: e.getAttribute('ng-click'),
                label: e.getAttribute('aria-label'),
                element: e
            }
            info.push(i);
        }
    });
    
    return info;`)
}

module.exports = {
    getCancelButtons
}