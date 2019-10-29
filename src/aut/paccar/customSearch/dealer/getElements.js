'use strict'

let getElements = async (msg = {}, tag = '') => {

    return await msg.parent.executeScript(`var elements = document.querySelectorAll(arguments[0]);
    
    var objects = [];

    elements.forEach(e => {

        const data = {
            name: e.getAttribute('name'),
            value: e.getAttribute('value'),
            type: e.getAttribute('type'),
            label: e.getAttribute('aria-label'),
            model: e.getAttribute('ng-model'),
            class: e.getAttribute('class'),
            element: e
        }

        objects.push(data);
    });
    
    return objects;`, tag)
}

module.exports = {
    getElements
}