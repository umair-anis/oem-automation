'use strict'

let FilterBuilder = (() => {

    let filter = {
        name: '',
        chipFilters: [],
        filterType: ''
    }

    this.setName = (value = '') => {
        filter.name = [value]
        return this
    }

    this.setChipFilters = (values = []) => {
        for(const value of values){
            filter.chipFilters.push([value])
        }
        return this
    }

    this.setFilterType = (value = '') => {
        filter.filterType = [value]
        return this
    }

    this.build = () => {
        return Object.freeze(filter)
    }

    return this
})

module.exports = {
    FilterBuilder
}