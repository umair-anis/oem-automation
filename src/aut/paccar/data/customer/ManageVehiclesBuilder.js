'use strict'

let ManageVehiclesBuilder = (() => {

    let manageVehicles = {
        vehicleList: '',
        filterBy: '',
        search: '',
    }

    this.setVehicleList = (value = '') => {
        manageVehicles.vehicleList = [value]
        return this
    }

    this.setFilterBy = (value = '') => {
        manageVehicles.filterBy = [value]
        return this
    }

    this.setSearch = (value = '') => {
        manageVehicles.search = [value]
        return this
    }

    this.build = () => {
        return Object.freeze(manageVehicles)
    }

    return this
})

module.exports = {
    ManageVehiclesBuilder
}