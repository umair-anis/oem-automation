'use strict'

let OrderBuilder = (() => {

    let order = {
        columnName: '',
        arrowUp: true,
        count: 1
    }

    this.setColumnName = (value = '') => {
        order.columnName = [value]
        return this
    }

    this.setArrowUp = (value = true) => {
        order.arrowUp = value
        return this
    }

    this.setCount = (value = 1) => {
        order.count = value
        return this
    }

    this.build = () => {

        if(order.count < 0) throw new Error(`OrderBuilder: Need a count greater than zero.`)

        return Object.freeze(order)
    }

    return this
})

module.exports = {
    OrderBuilder
}