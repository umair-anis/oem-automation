'use strict'

let SnapshotBuilder = (() => {

    let snapshot = {
        dropdown: '',
        graph: ''
    }

    this.setDropdown = (value = '') => {
        snapshot.dropdown = [value]
        return this
    }

    this.setGraph = (value = '') => {
        snapshot.graph = [value]
        return this
    }

    this.build = () => {
        return Object.freeze(snapshot)
    }

    return this
})

module.exports = {
    SnapshotBuilder
}