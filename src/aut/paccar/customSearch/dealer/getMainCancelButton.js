'use strict'

let getMainCancelButton = async (msg = {}) => {
    return await msg.parent.executeScript(`var elements = document.querySelectorAll("a");
    
    var info = []

    elements.forEach(e => {    
    
        const myClass = e.getAttribute('class')
        const type = e.getAttribute('type')
        
        if (myClass === 'md-raised md-button md-default-theme md-ink-ripple' && type === 'button') {

            const i = {
                href: e.getAttribute('href'),
                element: e
            }
            
            info.push(i)
            
        }
        
    });
    
    return info `)
}

module.exports = {
    getMainCancelButton
}