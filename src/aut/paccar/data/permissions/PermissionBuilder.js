'use strict'

let PermissionBuilder = (() => {

    let permission = {
        name: '',
        roleName: '',
        description: '',
    }

    this.setName = (value = '') => {

        // Plan name shown
        permission.name = [value]

        // Convert the name to the correct Permissions Format
        // 1. Replace spaces with underscores
        // 2. Capitalize everything
        // 3. Add pretext: ROLE_
        value = value.replace(` `, `_`)
        value = value.toUpperCase()
        value = `ROLE_` + value
        
        permission.roleName = [value]
        return this
    }

    this.setDescription = (value = '') => {
        permission.description = [value]
        return this
    }

    this.build = () => {
        return Object.freeze(permission)
    }

    return this
})

module.exports = {
    PermissionBuilder
}