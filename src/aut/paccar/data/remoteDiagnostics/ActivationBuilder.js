'use strict'

let ActivationBuilder = (() => {

    let activate = {
        vins: [],
        removalCategory: '',
    }

    this.setVins = (values = []) => {
        const formatted = []
        for(let value of values){
            formatted.push([value])
        }
        activate.vins = formatted
        return this
    }

    this.setRemovalCategory = (value = '') => {
        activate.removalCategory = [value]
        return this
    }

    this.build = () => {

        if(activate.vins.length == 0) throw new Error(`ActivationBuilder: Empty List of Vins to activate`)

        return Object.freeze(activate)
    }

    return this
})

module.exports = {
    ActivationBuilder
}