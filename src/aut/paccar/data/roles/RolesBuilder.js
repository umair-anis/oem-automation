'use strict'

let { isEmptyOrWhitespace } = require('../../../../core/model/isEmptyOrWhitespace')

let RolesBuilder = (() => {

    let roles = {
        name: '',
        description: '',
        organizationTypes: [],
        applications: [],
        permissions: []
    }

    this.setName = (value = '') => {
        roles.name = [value]
        return this
    }

    this.setDescription = (value = '') => {
        roles.description = [value]
        return this
    }

    this.setOrganizationTypes = (value = []) => {
        let types = []
        for(let type of value){
            types.push([type])
        }
        roles.organizationTypes = types
        return this
    }

    this.setApplications = (value = []) => {
        let apps = []
        for(let app of value){
            apps.push([app])
        }
        roles.applications = apps
        return this
    }

    this.setPermissions = (value = []) => {
        let permissions = []
        for(let permission of value){
            permissions.push([permission])
        }
        roles.permissions = permissions
        return this
    }

    this.build = () => {

        if(isEmptyOrWhitespace(roles.name.toString())) throw new Error(`RolesBuilder: Invalid Name`)

        return Object.freeze(roles)
    }

    return this
})

module.exports = {
    RolesBuilder
}