'use strict'

let getSecondaryButtons = async (msg = {}) => {

    return await msg.parent.executeScript(`var elements = document.querySelectorAll("button");
    
    var myButtons = [];

    elements.forEach(e => {

        const myClass = e.getAttribute('ng-click');

        //if (myClass === 'md-button md-default-theme md-ink-ripple') {

            //e.setAttribute('aria-hidden', false);
            const data = {
                element: e,
                ngClick: myClass
            }
            myButtons.push(data);
        //}
    });
    
    return myButtons;`)
}

module.exports = {
    getSecondaryButtons
}