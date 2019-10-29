
'use strict'

let generateDefaultUser = async () => {

    let userForm = {
        email: ['happytest.qpokwwn6@mailosaur.io'],
        firstName: ['Mike'],
        lastName: ['Schmidt'],
        phone: ['123-456-7890'],
        extension: ['87'],

        organizationType: ['Customer'],
        organizationName: ['Peoplenet'],
        userRole: ['Customer User'],

        preferences: {
            hideJoinAll: false,
            alwaysCollapseBar: true,
            mapCenter: ['Mexico'], 
            language: ['Spanish'],
            measure: ['US Customary'], 
            distance: ['Kilometers'], 
            volume: ['Gallons'], 
            fuelEconomy: ['Miles Per Gallon'],
            temperature: ['Degrees Celsius'],
            pressure: ['Kilopascals'],
            mass: ['Pounds']
        },

        newPassword: ['myPassword1'],
        confirmPassword: ['myPassword1'],

        statusActive: true,
        emailNotVerified: false,
    }
    
    return userForm
}

module.exports = {
    generateDefaultUser
}