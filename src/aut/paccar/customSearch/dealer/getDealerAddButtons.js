'use strict'

let getDealerAddButtons = async (msg = {}) => {

    return await msg.parent.executeScript(`var elements = document.querySelectorAll("button");
    
    var myButtons = [];

    elements.forEach(e => {

        const hidden = e.getAttribute('aria-hidden');

        if (hidden != null) {

            const myClass = e.getAttribute('class');

            if (myClass === 'md-primary md-button md-default-theme md-ink-ripple') {

                e.setAttribute('aria-hidden', false);
                myButtons.push(e);
            }
        }
    });
    
    return myButtons;`)
}

module.exports = {
    getDealerAddButtons
}